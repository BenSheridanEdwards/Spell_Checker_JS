const spelling = require('./Spelling');

describe('spelling', () => {
  it("receives a string with one word 'hello', spelt correctly, and returns it", () => {
    expect(spelling('hello')).toEqual('hello');
  });

  it("receives a string with one word 'helloo', spelt incorrectly, and highlights it", () => {
    expect(spelling('helloo')).toEqual('~helloo~');
  });
});
