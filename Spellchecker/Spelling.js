const spelling = string => {
  const checker = () => {
    let sentence = string;
    const array = sentence.split(' ');

    array.forEach(word => {
      if (!['hello', 'there'].includes(word)) {
        sentence = sentence.replace(word, `~${word}~`);
      }
    });

    return sentence;
  };
  return checker();
};

module.exports = spelling;
