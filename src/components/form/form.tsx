import React, { ChangeEvent, FC, FormEventHandler, ReactElement } from 'react';
import { IErrors } from './validator';
import { fixedPrefixClasses } from '../../utils/helpers';
import './form.scss';

interface IFieldProps {
  name: string;
  label: string;
  input: { type: string };
}
export interface IFormValues {
  [k: string]: any;
}
interface IFormProps {
  formData: { [k: string]: any };
  fields: IFieldProps[];
  buttons: ReactElement[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: (newFormData: IFormValues) => void;
  errors: IErrors;
}
const fixSc = fixedPrefixClasses('wui-form');
const Form: FC<IFormProps> = (props) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChang = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newFormData = { ...props.formData, [name]: value };
    props.onChange(newFormData);
  };
  const { errors, formData } = props;
  return (
    <form onSubmit={onSubmit} className={fixSc()}>
      <div className={fixSc('content')}>
        {props.fields.map((field) => (
          <div className={fixSc('row')} key={field.name}>
            {field.label}
            <input
              onChange={onInputChang.bind(null, field.name)}
              type={field.input.type}
              value={formData[field.name]}
            />
            <div className={fixSc('error')}>
              {errors[field.name]}
            </div>
          </div>
        ))}
      </div>
      <footer className={fixSc('footer')}>
        {props.buttons}
      </footer>
    </form>
  );
};

export default Form;
