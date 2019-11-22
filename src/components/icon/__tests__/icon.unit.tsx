import renderer from 'react-test-renderer';
import Icon from '@/components/icon/icon';
import * as React from 'react';

// 测试引入scss文件的组件：@see:https://github.com/facebook/jest/issues/3094#issuecomment-284867098
describe('icon 组件', () => {
  it('xxx', () => {
    const json = renderer.create(<Icon name="qq"/>);
    expect(json).toMatchSnapshot();
  });
});
