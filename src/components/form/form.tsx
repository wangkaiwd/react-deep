import React, { ChangeEvent, FC, FormEventHandler, ReactElement } from 'react';

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
}
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
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((field) => (
        <div key={field.name}>
          {field.label}
          <input
            onChange={onInputChang.bind(null, field.name)}
            type={field.input.type}
            value={props.formData[field.name]}
          />
        </div>
      ))}
      <footer>
        {props.buttons}
      </footer>
    </form>
  );
};

export default Form;
