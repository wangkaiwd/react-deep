import { IFormValues } from './form';

interface IConstraintItem {
  message?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
  validator?: (value: string) => Promise<string>;
}
interface IConstraintsProps {
  [key: string]: IConstraintItem[];
}

interface IErrors {
  [key: string]: Promise<string | undefined>[];
}
export interface IFinalErrors {
  [key: string]: string[];
}
const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};

const zip = (values: [string, any][]) => {
  const result: { [key: string]: any[] } = {};
  // 使用函数参数与数组的解构赋值结合使用
  values.map(([key, value]) => {
    if (value === undefined) {return;}
    result[key] = result[key] || []; // 不存在默认为数组，然后都可以使用push方法
    result[key].push(value);
  });
  return result;
};

const flatErrorsToPromises = (errors: IErrors) => {
  const promises: Promise<[string, string | undefined]>[] = [];
  Object.keys(errors).map((key) => {
    errors[key].map((error) => {
      promises.push(error.then(
        (result) => [key, result],
        (error: string) => [key, error],
      ));
    });
  });
  return promises;
};
const validator = (formData: IFormValues, constraints: IConstraintsProps, callback: (errors: IFinalErrors) => void) => {
  const errors: IErrors = {};
  const addErrors = (key: string, message: Promise<string | undefined>) => {
    if (errors[key]) {
      errors[key].push(message);
    } else {
      errors[key] = [message];
    }
  };
  Object.keys(formData).map((key) => {
    const constraint = constraints[key];
    constraint.map((item) => {
      const value = formData[key];
      if (item.required && isEmpty(value) && item.message) {
        addErrors(key, Promise.resolve(item.message));
      }
      if (item.maxLength && value.length > item.maxLength && item.message) {
        addErrors(key, Promise.resolve(item.message));
      }
      if (item.minLength && value.length < item.minLength && item.message) {
        addErrors(key, Promise.resolve(item.message));
      }
      if (item.pattern && !item.pattern.test(value) && item.message) {
        addErrors(key, Promise.resolve(item.message));
      }
      if (item.validator) {
        addErrors(key, item.validator(value));
      }
    });
  });
  Promise.all(flatErrorsToPromises(errors)).then((values) => {
    callback(zip(values));
  });
};

export default validator;
