export const classes = (...names: (string | undefined | false | null)[]): string => {
  return names.filter(Boolean).join(' ');
};
