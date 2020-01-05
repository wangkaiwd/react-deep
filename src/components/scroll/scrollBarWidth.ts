const getScrollBarWidth = () => {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.position = 'absolute';
  div.style.top = '-9999px'; // 把div放到屏幕之外，防止影响用户操作
  div.style.left = '-9999px';
  div.style.overflow = 'scroll';
  document.body.appendChild(div);
  const scrollBarWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollBarWidth;
};
export default getScrollBarWidth;
