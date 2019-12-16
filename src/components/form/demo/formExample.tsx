import React, { useState } from 'react';
import Form, { IFormValues } from '../form';

const FormExample = () => {
  const [formData, setFormData] = useState<IFormValues>({
    username: '用户名',
    password: '密码',
  });
  const fields = [
    {
      name: 'username',
      label: '用户名',
      input: { type: 'text' },
    },
    {
      name: 'password',
      label: '密码',
      input: { type: 'password' },
    },
  ];
  const buttons = [
    <button key={1} type="submit">提交</button>,
    <button key={2}>返回</button>,
  ];
  const onSubmit = () => {
    console.log('formData', formData);
  };
  const onChange = (newFormData: IFormValues) => {
    setFormData(newFormData);
  };
  return (
    <Form
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
      buttons={buttons}
      fields={fields}
    />
  );
};

export default FormExample;
