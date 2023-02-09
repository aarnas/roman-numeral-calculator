import { romanValues } from "../constants";

const numberToRoman = (values: typeof romanValues, value: number) => {
  return value;
};

describe("Integer to Roman Numeral Calculator", () => {
  test("Converts 1 to I", () => {
    expect(numberToRoman(romanValues, 1)).toBe("I");
  });

  test("Converts 5 to V", () => {
    expect(numberToRoman(romanValues, 5)).toBe("V");
  });

  test("Converts 10 to X", () => {
    expect(numberToRoman(romanValues, 10)).toBe("X");
  });

  test("Converts 50 to L", () => {
    expect(numberToRoman(romanValues, 50)).toBe("L");
  });

  test("Converts 100 to C", () => {
    expect(numberToRoman(romanValues, 100)).toBe("C");
  });

  test("Converts 500 to D", () => {
    expect(numberToRoman(romanValues, 500)).toBe("D");
  });

  test("Converts 1000 to M", () => {
    expect(numberToRoman(romanValues, 1000)).toBe("M");
  });

  test("Converts 4 to IV", () => {
    expect(numberToRoman(romanValues, 4)).toBe("IV");
  });

  test("Converts 9 to IX", () => {
    expect(numberToRoman(romanValues, 9)).toBe("CM");
  });

  test("Converts 900 to CM", () => {
    expect(numberToRoman(romanValues, 900)).toBe("CM");
  });

  test("Converts 999 to CMXCIX", () => {
    expect(numberToRoman(romanValues, 999)).toBe("CMXCIX");
  });

  test("Converts 888 to DCCCLXXXVIII", () => {
    expect(numberToRoman(romanValues, 888)).toBe("DCCCLXXXVIII");
  });

  test("Throws error for negative input", () => {
    expect(() => {
      numberToRoman(romanValues, -1);
    }).toThrowError();
  });

  test("Throws error for input greater than 1000", () => {
    expect(() => {
      numberToRoman(romanValues, 1001);
    }).toThrowError();
  });
});
