const spelling = require('./spelling')

describe('spelling', () => {
  it("receives a string with one word 'hello', spelt correctly, and returns it", () => {
    expect(spelling('hello')).toEqual('hello');
  });

});
