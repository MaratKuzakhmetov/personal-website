export const makeClassName = (
  list: (string[] | string | boolean)[][]
): string => {
  return list
    .filter(([, active]) => active)
    .map(([className]) => className)
    .join(" ");
};
