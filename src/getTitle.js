const getTitle = (title) => {
  regexList = [
    /(?<=\[|\(|\<|\{|\n)(.*?)(?=\s*\]|\)|\>|\}|\n)/,
    /(?<=((Source)|(Sauce)|(Manga))(\*\*)*:*\s+)(?:.+)/,
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

module.exports = getTitle;
