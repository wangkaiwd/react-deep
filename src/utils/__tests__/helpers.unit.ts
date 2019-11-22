import { classes } from '@/utils/helpers';

describe('classes', () => {
  it('接受 0 个className', () => {
    const className = classes();
    expect(className).toEqual('');
  });
  it('接受 1 个className', () => {
    const className = classes('x');
    expect(className).toEqual('x');
  });
  it('接受 2 个className', () => {
    const className = classes('x', 'y');
    expect(className).toEqual('x y');
  });
  it('接受 undefined 不会反回 undefined', () => {
    const className = classes('x', undefined);
    expect(className).toEqual('x');
  });
  it('接受各种奇怪的值', () => {
    const className = classes('x', undefined, false, null, 'y', '中文');
    expect(className).toEqual('x y 中文');
  });
});
