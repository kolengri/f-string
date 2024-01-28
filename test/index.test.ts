import { f } from '../src/index';

describe(f.name, () => {
  it('adds two numbers together', () => {
    const g = 'test2';
    console.log(f`test test ${g} ${g}`);
  });
});
