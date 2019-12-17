import { IFormValues } from './form';

interface IConstraintItem {
  message: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}
interface IConstraintsProps {
  [key: string]: IConstraintItem[];
}

export interface IErrors {
  [key: string]: string[];
}
const isEmpty = (value: any) => {
  if (value === undefined || value === null || value === '') {
    return true;
  } else {
    return false;
  }
};
const validator = (formData: IFormValues, constraints: IConstraintsProps): IErrors => {
  const errors: IErrors = {};
  const addErrors = (key: string, message: string) => {
    if (errors[key]) {
      errors[key].push(message);
    } else {
      errors[key] = [message];
    }
  };
  Object.keys(formData).map((key) => {
    const constraint = constraints[key];
    constraint.map((item) => {
      if (item.required && isEmpty(formData[key])) {
        addErrors(key, item.message);
      }
      if (item.maxLength && formData[key].length > item.maxLength) {
        addErrors(key, item.message);
      }
      if (item.minLength && formData[key].length < item.minLength) {
        addErrors(key, item.message);
      }
      if (item.pattern && !item.pattern.test(formData[key])) {
        addErrors(key, item.message);
      }
    });
  });
  return errors;
};

export default validator;