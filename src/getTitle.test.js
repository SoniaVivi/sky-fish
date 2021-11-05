const getTitle = require("./getTitle");

test("gets title from text", () => {
  expect(getTitle("Berserk")).toBe("Berserk");
});

test("gets title from brackets", () => {
  expect(getTitle("[Ura Sekai Picnic]")).toBe("Ura Sekai Picnic");
  expect(getTitle("<Mieruko-Chan>")).toBe("Mieruko-Chan");
  expect(getTitle("(Azumanga Daioh)")).toBe("Azumanga Daioh");
  expect(getTitle("{Ura Sekai Picnic}")).toBe("Ura Sekai Picnic");
});

test("gets title after the word Source", () => {
  expect(getTitle("Source: Steins;Gate 0")).toBe("Steins;Gate 0");
  expect(getTitle("Source Steins;Gate 0")).toBe("Steins;Gate 0");
  expect(getTitle("**Source** Steins;Gate 0")).toBe("Steins;Gate 0");
  expect(getTitle("**Source**: Steins;Gate 0")).toBe("Steins;Gate 0");
});

test("gets title after the word Sauce", () => {
  expect(getTitle("Sauce Ura Sekai Picnic")).toBe("Ura Sekai Picnic");
  expect(getTitle("Sauce: Ura Sekai Picnic")).toBe("Ura Sekai Picnic");
  expect(getTitle("**Sauce** Ura Sekai Picnic")).toBe("Ura Sekai Picnic");
  expect(getTitle("**Sauce**: Ura Sekai Picnic")).toBe("Ura Sekai Picnic");
});

test("gets title before line breaks", () => {
  expect(getTitle("Ura Sekai Picnic\nLorem ipsum dolor sit amet")).toBe(
    "Ura Sekai Picnic"
  );
  expect(getTitle("[Ura Sekai Picnic]\nLorem ipsum dolor sit amet")).toBe(
    "Ura Sekai Picnic"
  );
});

test("gets title between line breaks", () => {
  expect(
    getTitle(
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet"
    )
  ).toBe("Ura Sekai Picnic");
  expect(
    getTitle(
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet\n\
       Lorem ipsum dolor sit amet"
    )
  ).toBe("Ura Sekai Picnic");
});

test("gets title after the word Manga", () => {
  expect(getTitle("Manga: Ura Sekai Picnic")).toBe("Ura Sekai Picnic");
});
