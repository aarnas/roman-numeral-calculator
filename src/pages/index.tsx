import Head from "next/head";

import styles from "../pages/index.module.css";
import { numberToRoman } from "../utils";
import { ChangeEvent, useState } from "react";
import { romanValues } from "../constants";

export default function RomanNumeralCalculator() {
  const [roman, setRoman] = useState("");

  const onNumberChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const currentNumber = Number(e.currentTarget.value);
    currentNumber && currentNumber > 0 && currentNumber <= 1000
      ? setRoman(numberToRoman(romanValues, currentNumber))
      : setRoman("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Roman Numeral Calculator</p>
        <input
          placeholder="No. from 1 to 1000"
          type="number"
          onChange={onNumberChange}
        ></input>
        <input placeholder="Roman Numeral" value={roman} readOnly></input>
      </main>
    </div>
  );
}
