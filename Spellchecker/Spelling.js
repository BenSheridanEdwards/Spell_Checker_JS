const spelling = string => {
  const checker = () => {
    if (string !== 'hello') {
      return `~${string}~`;
    }
    return string;
  };
  return checker();
};

module.exports = spelling;
