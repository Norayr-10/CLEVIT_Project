import { FC } from "react";
import style from "./main.module.css";
const Main: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content"]}>
        <h2 className={style["number"]}>35+</h2>
        <p className={style["text_A"]}>Successful Projects</p>
      </div>
      <div className={style["content"]}>
        <h2 className={style["number"]}>10+</h2>
        <p className={style["text_B"]}>Engineers & Designers</p>
      </div>
      <div className={style["content"]}>
        <h2 className={style["number"]}>20+</h2>
        <p className={style["text_C"]}>Industries Served</p>
      </div>
    </div>
  );
};

export default Main;
