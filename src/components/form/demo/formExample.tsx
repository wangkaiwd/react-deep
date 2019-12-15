import React, { useState } from 'react';
import Form from '../form';

const FormExample = () => {
  const [formData, setFormData] = useState({
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
  return (
    <Form formData={formData} fields={fields}/>
  );
};

export default FormExample;
