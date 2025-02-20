import { FC } from "react";
import style from "./process.module.css";

const Process: FC = () => {
  return (
    <div className={style.container}>
      <div className={style["title"]}>
        <h2>Processes We Follow</h2>
      </div>
      <div className={style["description"]}>
        <div className={style.box}></div>
        <div className={style.line}></div>
        <div className={style.box}></div>
        <div className={style.line}></div>
        <div className={style.box}></div>
        <div className={style.line}></div>
        <div className={style.box}></div>
      </div>
    </div>
  );
};
export default Process;
