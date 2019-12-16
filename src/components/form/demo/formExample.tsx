import React, { useState } from 'react';
import Form, { IFormValues } from '../form';
import validator from '../validator';

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
    // button type 的默认值是 submit: @see:https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button
    <button key={1}>提交</button>,
    <button key={2} type="button">返回</button>,
  ];
  const onSubmit = () => {
    const constraints = {
      username: [ // 错误提示是有顺序的，所以通过数组来做处理
        { required: true, message: '用户名必填' },
        { maxLength: 6, message: '最大长度为6' },
        { minLength: 4, message: '最小长度为4' },
      ],
      password: [
        { pattern: /[a-z]/, message: '格式不匹配' },
      ],
    };
    const errors = validator(formData, constraints);
    console.log('errors', errors);
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
