export const f = (strings: TemplateStringsArray, ...values: string[]) => {
  console.log(strings, values);

  return values.reduce((final) => {
    return '';
  });
};

export default f;
