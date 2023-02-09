export function numberToRoman(
  romanValues: { value: number; symbol: string }[],
  num: number
): string {
  if (num < 1 || num > 1000) {
    throw new Error("Error");
  }

  let result = "";
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].value) {
      result += romanValues[i].symbol;
      num -= romanValues[i].value;
    }
  }

  return result;
}
