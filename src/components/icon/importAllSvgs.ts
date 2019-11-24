// @see:https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18446#issuecomment-318395848
// @see:https://webpack.js.org/guides/dependency-management/#context-module-api
try {
  const importAll = (r: any) => {
    r.keys().forEach(r);
  };
  importAll(require.context('@/assets/svgs', true, /\.svg$/));
} catch (e) {
}
