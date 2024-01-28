export const f = (strings: TemplateStringsArray, ...values: string[]) => {
  console.log(strings, values);

  return values.reduce((final) => {});
};

export default f;
