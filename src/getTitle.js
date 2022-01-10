const getTitle = (title) => {
  const regexList = [
    /(?<=\[)(.*?)(?=\s*\])/,
    /(?<=<)(.*?)(?=\s*>)/,
    /(?<=\()(.*?)(?=\s*\))/,
    /(?<=\{)(.*?)(?=\s*\})/,
    /(?<=\n)(.*?)(?=\s*\n)/,
    /(?<=((Source)|(Sauce)|(Manga))(\*\*)*:*\s+)(?:.+)/,
    /(?<=(\[(.*)\]))(?:.+)/,
    /(?<=(\[(.*)\]))(?:.+)(?=\s*-)/,
    /(.*?)(?=\s*\n)/,
  ];
  let matches = [title];
  for (const regex of regexList) {
    const match = title.match(regex);
    if (match) {
      matches.unshift(match[0]);
    }
  }
  return matches;
};
//eslint-disable-next-line no-undef
module.exports = getTitle;
