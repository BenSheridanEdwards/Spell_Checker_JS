const spelling = require('./Spelling');

describe('spelling', () => {
  const dictionary = ['hello', 'there', 'friend'];
  describe('when the spellchecker is passed one word', () => {
    it("receives a string with one word 'hello', spelt correctly, and returns it", () => {
      expect(spelling('hello', dictionary)).toEqual('hello');
    });

    it("receives a string with one word 'helloo', spelt incorrectly, and highlights it", () => {
      expect(spelling('helloo', dictionary)).toEqual('~helloo~');
    });
  });

  describe('when the spellchecker is passed two words', () => {
    it("receives a string with two words 'hello there', spelt correctly, and returns it", () => {
      expect(spelling('hello there', dictionary)).toEqual('hello there');
    });

    it("receives a string with two words 'helloo there', where the first word is spelt incorrectly, and highlights only the first word", () => {
      expect(spelling('helloo there', dictionary)).toEqual('~helloo~ there');
    });

    it("receives a string with two words 'helloo theree', where both words are spelt incorrectly, and highlights both words", () => {
      expect(spelling('helloo theree', dictionary)).toEqual(
        '~helloo~ ~theree~'
      );
    });
  });

  describe('when the spellchecker is passed a sentence with more than two words', () => {
    it("receives a string with 'hello there friend', where all words are spelt correctly, and returns it", () => {
      expect(spelling('hello there friend', dictionary)).toEqual(
        'hello there friend'
      );
    });
  });
});
