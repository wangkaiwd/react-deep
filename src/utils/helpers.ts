export const classes = (...names: (string | undefined | false | null)[]): string => {
  return names.filter(Boolean).join(' ');
};
interface XXX {
  [k: string]: string | boolean | null | undefined;
}
export const fixedPrefixClasses = (prefix: string) => {
  return (...names: (string | undefined | false | null | XXX)[]) => {
    if (names.length === 0) {return prefix;}
    return names.filter(Boolean).reduce((result: string[], name) => {
      if (isPlainObject(name)) {
        const keys = Object.keys(name);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          name[key] && result.push(`${prefix}-${key}`);
          return result;
        }
      }
      result.push(`${prefix}-${name}`);
      return result;
    }, []).join(' ');
  };
};

const isPlainObject = (value: any): value is object => {
  return toString.call(value) === '[object Object]';
};
