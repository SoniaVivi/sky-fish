const displayController = require("./displayController");

test("gets title from text", () => {
  expect(displayController.getTitle("Berserk")).toBe("Berserk");
});

test("gets title from brackets", () => {
  expect(displayController.getTitle("[Ura Sekai Picnic]")).toBe(
    "Ura Sekai Picnic"
  );
  expect(displayController.getTitle("<Mieruko-Chan>")).toBe("Mieruko-Chan");
  expect(displayController.getTitle("(Azumanga Daioh)")).toBe("Azumanga Daioh");
  expect(displayController.getTitle("{Ura Sekai Picnic}")).toBe(
    "Ura Sekai Picnic"
  );
});

test("gets title after the word Source", () => {
  expect(displayController.getTitle("Source: Steins;Gate 0")).toBe(
    "Steins;Gate 0"
  );
  expect(displayController.getTitle("Source Steins;Gate 0")).toBe(
    "Steins;Gate 0"
  );
  expect(displayController.getTitle("**Source** Steins;Gate 0")).toBe(
    "Steins;Gate 0"
  );
  expect(displayController.getTitle("**Source**: Steins;Gate 0")).toBe(
    "Steins;Gate 0"
  );
});

test("gets title after the word Sauce", () => {
  expect(displayController.getTitle("Sauce Ura Sekai Picnic")).toBe(
    "Ura Sekai Picnic"
  );
  expect(displayController.getTitle("Sauce: Ura Sekai Picnic")).toBe(
    "Ura Sekai Picnic"
  );
  expect(displayController.getTitle("**Sauce** Ura Sekai Picnic")).toBe(
    "Ura Sekai Picnic"
  );
  expect(displayController.getTitle("**Sauce**: Ura Sekai Picnic")).toBe(
    "Ura Sekai Picnic"
  );
});

test("gets title before line breaks", () => {
  expect(
    displayController.getTitle("Ura Sekai Picnic\nLorem ipsum dolor sit amet")
  ).toBe("Ura Sekai Picnic");
  expect(
    displayController.getTitle("[Ura Sekai Picnic]\nLorem ipsum dolor sit amet")
  ).toBe("Ura Sekai Picnic");
});

test("gets title between line breaks", () => {
  expect(
    displayController.getTitle(
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet"
    )
  ).toBe("Ura Sekai Picnic");
  expect(
    displayController.getTitle(
      "Lorem ipsum dolor sit amet\nUra Sekai Picnic\nLorem ipsum dolor sit amet\n\
       Lorem ipsum dolor sit amet"
    )
  ).toBe("Ura Sekai Picnic");
});
