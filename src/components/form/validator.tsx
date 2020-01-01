import { IFormValues } from './form';

interface IConstraintItem {
  message?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
  validator?: () => Promise<string>;
}
interface IConstraintsProps {
  [key: string]: IConstraintItem[];
}

export interface IErrors {
  [key: string]: Promise<string>[];
}
const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};
const validator = (formData: IFormValues, constraints: IConstraintsProps, callback: (errors: IErrors) => void) => {
  const errors: IErrors = {};
  const addErrors = (key: string, message: Promise<string>) => {
    if (errors[key]) {
      errors[key].push(message);
    } else {
      errors[key] = [message];
    }
  };
  Object.keys(formData).map((key) => {
    const constraint = constraints[key];
    constraint.map((item) => {
      if (item.required && isEmpty(formData[key]) && item.message) {
        addErrors(key, Promise.reject(item.message));
      }
      if (item.maxLength && formData[key].length > item.maxLength && item.message) {
        addErrors(key, Promise.reject(item.message));
      }
      if (item.minLength && formData[key].length < item.minLength && item.message) {
        addErrors(key, Promise.reject(item.message));
      }
      if (item.pattern && !item.pattern.test(formData[key]) && item.message) {
        addErrors(key, Promise.reject(item.message));
      }
      if (item.validator) {
        addErrors(key, item.validator());
      }
    });
  });
  // console.log('validator', errors);
  // [[u,p1],[u,p2],[p,p1],[p,p2]]
  const array: [string, Promise<string>][] = [];
  Object.keys(errors).map((key) => {
    for (let i = 0; i < errors[key].length; i++) {
      const error = errors[key][i];
      array.push([key, error]);
    }
  });
};

export default validator;

// 思路整理
// 1. 目前errors: { username: ['e1','e2'] }
// 2. 添加异步之后errors: { username: ['e1','e2','p1','p2'] }
// 3. 所有的内容都用promise来表示：{ username: ['p e1', 'p e2','p1','p2'] }
// 使用Promise.all来执行所有Promise，不过在执行Promise.all之前要先将所有Promise都处理为成功的Promise
// 将使用Promise.all处理完成后的结果组合成原来的errors内容进行展示
