const defaults = {
  matchTags: [],
  matchGenres: [],
};

export const saveOption = (option, newValue) =>
  //eslint-disable-next-line no-undef
  browser.storage.local.set({ [option]: newValue });

export const loadOption = (option) =>
  //eslint-disable-next-line no-undef
  browser.storage.local
    .get(option)
    .then((data) =>
      !Object.keys(data).length > 0 ? defaults[option] : Object.values(data)[0]
    );
