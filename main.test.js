const {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
} = require("./main");

describe("yell", () => {
  it("adds an exclamation point at the end of the given string", () => {
    expect(yell("hello")).toBe("hello!");
    expect(yell("hi")).toBe("hi!");
  });

  it("adds a second exclamation point if there already is one", () => {
    expect(yell("hello!")).toBe("hello!!");
    expect(yell("hi!")).toBe("hi!!");
  });
});

describe("getFirstCharacter", () => {
  it("returns only the first character of a string", () => {
    expect(getFirstCharacter("Colin")).toBe("C");
    expect(getFirstCharacter("Mesi")).toBe("M");
  });

  it("returns a space if the string begins with one", () => {
    expect(getFirstCharacter(" Spacey McSpacerson")).toBe(" ");
    expect(getFirstCharacter(" whitespace ftw")).toBe(" ");
  });
});

describe("getLastCharacter", () => {
  it("returns only the last character of a string", () => {
    expect(getLastCharacter("Mr. Lasterton")).toBe("n");
    expect(getLastCharacter("end times")).toBe("s");
  });

  it("returns a space if the string ends with one", () => {
    expect(getLastCharacter("Spacey McSpacerson ")).toBe(" ");
    expect(getLastCharacter("end a sentence properly ")).toBe(" ");
  });
});

describe("getOneCharacter", () => {
  it("returns an arbitrary character", () => {
    expect(getOneCharacter("hello there", 0)).toBe("h");
    expect(getOneCharacter("hello there", 8)).toBe("e");
    expect(getOneCharacter("and good-bye", 8)).toBe("-");
  });
});

describe("getTwoCharacters", () => {
  it("returns arbitrary characters from the given string", () => {
    expect(getTwoCharacters("I want a bagel!", 2, 11)).toBe("wg");
    expect(
      getTwoCharacters("With cream cheese and lox, of course.", 6, 12)
    ).toBe("rh");
  });
});

describe("makeCapitalized", () => {
  it("returns upper-cased version of a string", () => {
    expect(makeCapitalized("Speed Racer Was Great")).toBe(
      "SPEED RACER WAS GREAT"
    );
    expect(makeCapitalized("what are you talking about")).toBe(
      "WHAT ARE YOU TALKING ABOUT"
    );
  });
});

describe("yellLouder", () => {
  it("adds three exclamation points and capitalizes", () => {
    expect(yellLouder("hey")).toBe("HEY!!!");
    expect(yellLouder("sorry for yelling so much")).toBe(
      "SORRY FOR YELLING SO MUCH!!!"
    );
  });
});

describe("getInitials", () => {
  it("returns the initials of a full name", () => {
    expect(getInitials("Herman Melville")).toBe("H.M.");
    expect(getInitials("Speed Racer")).toBe("S.R.");
  });

  it("returns only two initials if given three names", () => {
    expect(getInitials("Colin Raymond Jaffe")).toBe("C.R.");
    expect(getInitials("Neil Patrick Harris")).toBe("N.P.");
  });
});
