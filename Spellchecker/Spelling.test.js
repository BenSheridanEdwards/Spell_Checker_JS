const spelling = require('./Spelling');

describe('spelling', () => {
  describe('when the spellchecker is passed one word', () => {
    it("receives a string with one word 'hello', spelt correctly, and returns it", () => {
      expect(spelling('hello')).toEqual('hello');
    });

    it("receives a string with one word 'helloo', spelt incorrectly, and highlights it", () => {
      expect(spelling('helloo')).toEqual('~helloo~');
    });
  });

  describe('when the spellchecker is passed two words', () => {
    it("receives a string with two words 'hello there', spelt correctly, and returns it", () => {
      expect(spelling('hello there')).toEqual('hello there');
    });

    it("receives a string with two words 'helloo there', where the first word is spelt incorrectly, and highlights only the first word", () => {
      expect(spelling('helloo there')).toEqual('~helloo~ there');
    });

    it("receives a string with two words 'helloo theree', where both words are spelt incorrectly, and highlights both words", () => {
      expect(spelling('helloo theree')).toEqual('~helloo~ ~theree~');
    });
  });
});
