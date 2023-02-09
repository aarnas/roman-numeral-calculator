import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RomanNumeralCalculator from "../pages";

describe("Roman Numeral Calculator view", () => {
  beforeEach(() => {
    render(<RomanNumeralCalculator />);
  });

  afterEach(() => {
    cleanup();
  });

  test("Loads and displays Roman Numeral Calculator input fields", async () => {
    expect(screen.getByText("Roman Numeral Calculator")).toBeDefined();
    expect(document.querySelectorAll("input")).toHaveLength(2);
  });

  test("Returns 'DLV' output when input is 555", async () => {
    const InputEl = document.querySelector("input[type=number]");
    const OutputEl = document.querySelector("input[readonly]");
    InputEl &&
      fireEvent.change(InputEl, {
        target: {
          value: 555,
        },
      });
    expect(InputEl).toHaveValue(555);
    expect(OutputEl).toHaveValue("DLV");
  });
});
