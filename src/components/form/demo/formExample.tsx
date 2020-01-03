import React, { useState } from 'react';
import Form, { IFormValues } from '../form';
import validator, { IFinalErrors } from '../validator';
import Button from '../../button/button';

const usernames = ['测试名字001', '测试名字002', '测试名字003'];
const checkUser = (username: string) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (usernames.indexOf(username) !== -1) {
        reject('用户名已存在');
      } else {
        resolve('成功');
      }
    }, 3000);
  });
};
const validatorPassword = () => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      // if (Math.random() > 0.5) {
      //   resolve('成功');
      // } else {
      reject('密码不符合要求');
      // }
    }, 5000);
  });
};
const FormExample = () => {
  const [formData, setFormData] = useState<IFormValues>({
    username: '用户名',
    password: '密码',
  });
  const [errors, setErrors] = useState<IFinalErrors>({});
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
    <Button styleType="primary" key={1}>提交</Button>,
    <Button key={2} type="button">返回</Button>,
  ];
  // 这个value值是在调用校验函数时传入的
  // 假如不传，该如何获取？
  // 点击提交按钮时，通过password,来从formData中进行查找：formData['password']
  const validatorUser = (value: string) => {
    return checkUser(value);
  };
  const onSubmit = () => {
    const constraints = {
      username: [ // 错误提示是有顺序的，所以通过数组来做处理
        { required: true, message: '用户名必填' },
        { maxLength: 6, message: '最大长度为6' },
        { minLength: 4, message: '最小长度为4' },
        { validator: validatorUser },
      ],
      password: [
        { pattern: /[a-z]/, message: '格式不匹配' },
        { validator: validatorPassword },
      ],
    };
    validator(formData, constraints, (errors) => {
      // 要在所有的异步请求处理完成后调用回调函数来获取结果
      console.log('callback', errors);
      setErrors(errors);
    });
  };
  const onChange = (newFormData: IFormValues) => {
    setFormData(newFormData);
  };
  return (
    <Form
      onChange={onChange}
      onSubmit={onSubmit}
      formData={formData}
      errors={errors}
      buttons={buttons}
      fields={fields}
    />
  );
};

export default FormExample;
