const defaults = {
  matchTags: ["Isekai", "School", "Magic"],
  matchGenres: ["Action", "Comedy", "Drama"],
};

export const saveOption = (option, newValue) =>
  browser.storage.local.set({ [option]: newValue });

export const loadOption = (option) =>
  browser.storage.local
    .get(option)
    .then((data) =>
      !Object.keys(data).length > 0 ? defaults[option] : Object.values(data)[0]
    );
