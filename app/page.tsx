import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/head";
import Main from "./company/main";
import Services from "./ourServices/services";
import BodyTitle from "./bodyTitle/component";
import Technologies from "./ourTechnologies/component";
import Process from "./processesSection/process";
import Industries from "./industries/industries";
import App from "./Slider/slider";
import Window from "./windows/window";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <Services />
      <BodyTitle />
      <Technologies />
      <Process />
      <Industries />
      <App />
      <Window />
    </div>
  );
}
