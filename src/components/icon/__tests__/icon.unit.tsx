import renderer from 'react-test-renderer';
import Icon from '@/components/icon/icon';
import * as React from 'react';
import { mount } from 'enzyme';
// 测试引入scss文件的组件：@see:https://github.com/facebook/jest/issues/3094#issuecomment-284867098
describe('icon 组件', () => {
  it('渲染成功', () => {
    const json = renderer.create(<Icon name="alipay"/>);
    expect(json).toMatchSnapshot();
  });
  it('支持点击事件', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
