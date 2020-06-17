const spelling = (string, dictionary) => {
  const checker = () => {
    let sentence = string;
    const array = sentence.split(' ');

    array.forEach(word => {
      if (!dictionary.includes(word)) {
        sentence = sentence.replace(word, `~${word}~`);
      }
    });

    return sentence;
  };
  return checker();
};

module.exports = spelling;
