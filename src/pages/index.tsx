import Head from "next/head";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Roman Numeral Calculator</p>
      </main>
    </div>
  );
}
