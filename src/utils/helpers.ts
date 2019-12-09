interface AnyObject {
  [k: string]: any;
}
type ClassNames = (string | undefined | false | null | AnyObject)[];

export const classes = (...names: ClassNames): string => {
  return makeClasses(names);
};

export const fixedPrefixClasses = (prefix: string) => {
  return (...names: ClassNames) => {
    if (names.length === 0) {return prefix;}
    return makeClasses(names, prefix);
  };
};
const makeClasses = (names: ClassNames, prefix: string = ''): string => {
  return (names.filter(Boolean) as (string | AnyObject)[])
    .reduce((result: (string | AnyObject)[], name) => {
      if (isPlainObject(name)) {
        const keys = Object.keys(name);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          name[key] && result.push(prefix ? `${prefix}-${key}` : key);
        }
      } else {
        result.push(prefix ? `${prefix}-${name}` : name);
      }
      return result;
    }, [])
    .join(' ');
};

const isPlainObject = (value: any): value is object => {
  return toString.call(value) === '[object Object]';
};
