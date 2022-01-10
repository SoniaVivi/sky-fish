const getTitle = require("./getTitle");

test("gets title from text", () => {
  expect(getTitle("Berserk").sort()).toStrictEqual(["Berserk"].sort());
});

test("gets title from brackets", () => {
  expect(getTitle("[Ura Sekai Picnic]").sort()).toStrictEqual(
    ["[Ura Sekai Picnic]", "Ura Sekai Picnic"].sort()
  );
  expect(getTitle("<Mieruko-Chan>").sort()).toStrictEqual(
    ["<Mieruko-Chan>", "Mieruko-Chan"].sort()
  );
  expect(getTitle("(Azumanga Daioh)").sort()).toStrictEqual(
    ["(Azumanga Daioh)", "Azumanga Daioh"].sort()
  );
  expect(getTitle("{Ura Sekai Picnic}").sort()).toStrictEqual(
    ["{Ura Sekai Picnic}", "Ura Sekai Picnic"].sort()
  );
});

test("gets title after the word Source", () => {
  expect(getTitle("Source: Steins;Gate 0").sort()).toStrictEqual(
    ["Source: Steins;Gate 0", "Steins;Gate 0"].sort()
  );
  expect(getTitle("Source Steins;Gate 0").sort()).toStrictEqual(
    ["Source Steins;Gate 0", "Steins;Gate 0"].sort()
  );
  expect(getTitle("**Source** Steins;Gate 0").sort()).toStrictEqual(
    ["**Source** Steins;Gate 0", "Steins;Gate 0"].sort()
  );
  expect(getTitle("**Source**: Steins;Gate 0").sort()).toStrictEqual(
    ["**Source**: Steins;Gate 0", "Steins;Gate 0"].sort()
  );
});

test("gets title after the word Sauce", () => {
  expect(getTitle("Sauce Ura Sekai Picnic").sort()).toStrictEqual(
    ["Sauce Ura Sekai Picnic", "Ura Sekai Picnic"].sort()
  );
  expect(getTitle("Sauce: Ura Sekai Picnic").sort()).toStrictEqual(
    ["Sauce: Ura Sekai Picnic", "Ura Sekai Picnic"].sort()
  );
  expect(getTitle("**Sauce** Ura Sekai Picnic").sort()).toStrictEqual(
    ["**Sauce** Ura Sekai Picnic", "Ura Sekai Picnic"].sort()
  );
  expect(getTitle("**Sauce**: Ura Sekai Picnic").sort()).toStrictEqual(
    ["**Sauce**: Ura Sekai Picnic", "Ura Sekai Picnic"].sort()
  );
});

test("gets title before line breaks", () => {
  expect(
    getTitle("Ura Sekai Picnic\nLorem ipsum dolor sit amet").sort()
  ).toStrictEqual(
    ["Ura Sekai Picnic\nLorem ipsum dolor sit amet", "Ura Sekai Picnic"].sort()
  );
  expect(
    getTitle("[Ura Sekai Picnic]\nLorem ipsum dolor sit amet").sort()
  ).toStrictEqual(
    [
      "[Ura Sekai Picnic]\nLorem ipsum dolor sit amet",
      "Ura Sekai Picnic",
      "[Ura Sekai Picnic]",
    ].sort()
  );
});

test("gets title between line breaks", () => {
  expect(
    getTitle(
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet"
    ).sort()
  ).toStrictEqual(
    [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet",
      "Ura Sekai Picnic",
    ].sort()
  );
  expect(
    getTitle(
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet"
    ).sort()
  ).toStrictEqual(
    [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet\nLorem ipsum dolor sit amet",
      "Ura Sekai Picnic",
    ].sort()
  );
});

test("gets title after the word Manga", () => {
  expect(getTitle("Manga: Ura Sekai Picnic").sort()).toStrictEqual(
    ["Manga: Ura Sekai Picnic", "Ura Sekai Picnic"].sort()
  );
});
