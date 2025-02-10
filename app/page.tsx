import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/head";
import Main from "./company/main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Main/>
    </div>
  );
}
