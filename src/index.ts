export const f = (strings: TemplateStringsArray, ...values: string[]) => {
  console.log(strings, values);
  return 's';
};

export default f;
