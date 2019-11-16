import path from 'path';

const absPath = (...dir: string[]) =>
  path.resolve.apply(null, [__dirname, ...dir]);

interface StringObject {
  [k: string]: string;
}
const resolveTsconfigPathsToAlias = () => {
  const { paths } = require(absPath('../tsconfig.json')).compilerOptions;
  const alias: StringObject = {};
  Object.keys(paths).forEach((item: string) => {
    const key = item.replace('/*', '');
    alias[key] = absPath('../src', paths[item][0].replace('/*', ''));
  });
  return alias;
};
export { absPath, resolveTsconfigPathsToAlias };
