const displayController = (() => {
  const getTitle = (title) => {
    regexList = [
      /(?<=\[|\(|\<|\{|\n)(.*?)(?=\s*\]|\)|\>|\}|\n)/,
      /(?<=((Source)|(Sauce))(\*\*)*:*\s+)(?:.+)/,
      /.+\S/,
    ];
    for (const regex of regexList) {
      match = title.match(regex);
      if (match) {
        return match[0];
      }
    }
    return title;
  };
  const start = () => {};
  return { start, getTitle };
})();

module.exports = displayController;
