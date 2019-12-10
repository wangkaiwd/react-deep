// @see:https://stackoverflow.com/a/45887328/11720536
// 为任意svg文件添加一个默认导出
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.jpeg';
