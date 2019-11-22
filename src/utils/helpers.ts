export const classes = (...names: (string | undefined)[]): string => {
  return names.filter(Boolean).join(' ');
};
