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
});
