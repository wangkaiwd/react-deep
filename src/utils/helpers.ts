export const classes = (...names: (string | undefined | false | null)[]): string => {
  return names.filter(Boolean).join(' ');
};

export const fixedPrefixClasses = (prefix: string) => {
  return (...names: (string | undefined | false | null)[]) => {
    if (names.length === 0) {return prefix;}
    return names.filter(Boolean).map((name) => `${prefix}-${name}`).join(' ');
  };
};
