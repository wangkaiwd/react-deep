import React, { FC } from 'react';

interface IFieldProps {
  name: string;
  label: string;
  input: { type: string };
}
interface IFormProps {
  formData: { [k: string]: any };
  fields: IFieldProps[];
}
const Form: FC<IFormProps> = (props) => {
  return (
    <form>
      {props.fields.map((field) => (
        <div key={field.name}>
          {field.label}
          <input type={field.input.type}/>
        </div>
      ))}
    </form>
  );
};

export default Form;
