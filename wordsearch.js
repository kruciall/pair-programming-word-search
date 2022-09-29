const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const vertical = transpose(letters).map(ls => ls.join(''));
  for (l of vertical) {
    if (l.includes(word)) return true;
  }

  return false;
};
module.exports = wordSearch;

const transpose = function(letters) {
  const result = [];
  for (let col = 0; col < letters[0].length; col++) {

    let line = [];
    for (let row = 0; row < letters.length; row++) {
      line.push(letters[row][col]);
    }
    result.push(line);
  }
  return result;
};