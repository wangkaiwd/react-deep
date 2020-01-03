import React, { ChangeEvent, cloneElement, FC, FormEventHandler, ReactElement } from 'react';
import { IFinalErrors } from './validator';
import { fixedPrefixClasses } from '../../utils/helpers';
import './form.scss';
import Input from '../input/input';

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
  errors: IFinalErrors;
  errorsDisplayMode?: 'first' | 'all';
}
const fixSc = fixedPrefixClasses('wui-form');
const Form: FC<IFormProps> = (props) => {
  const { errors, formData, errorsDisplayMode = 'first' } = props;
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChang = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newFormData = { ...props.formData, [name]: value };
    props.onChange(newFormData);
  };
  const processErrors = (field: IFieldProps) => {
    const targetErrors = errors[field.name];
    if (targetErrors) {
      return errorsDisplayMode === 'first' ? targetErrors[0] : targetErrors.join('，');
    }
    return [];
  };
  return (
    <form onSubmit={onSubmit} className={fixSc()}>
      <table className={fixSc('content')}>
        <tbody>
        {props.fields.map((field) => (
          <tr className={fixSc('tr')} key={field.name}>
            <td className={fixSc('td')}>
              <span className={fixSc('label')}>{field.label}</span>
            </td>
            <td className={fixSc('td')}>
              <Input
                onChange={onInputChang.bind(null, field.name)}
                type={field.input.type}
                value={formData[field.name]}
              />
              <div className={fixSc('errors')}>
                {processErrors(field)}
              </div>
            </td>
          </tr>
        ))}
        <tr className={fixSc('tr')}>
          <td className={fixSc('td')}/>
          <td className={fixSc('td')}>
            {props.buttons.map((button) => cloneElement(button, {
              className: fixSc
              ('button'),
            }))}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
