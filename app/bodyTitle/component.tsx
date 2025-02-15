import { FC } from "react";
import style from "./component.module.css";

const BodyTitle: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["description"]}>
        <div className={style["content"]}>
          <p className={style["test_p"]}>Let's Build</p>
          <h2 className={style["test_h2"]}>YOUR DREAM PROJECT</h2>
        </div>
        <div className={style["class_btn"]}>
          <button className={style["btn"]}>Request a Demo</button>
        </div>
      </div>
      <div className={style["logo"]}>
        <img src="778-[Converted] 1.png" alt="" />
      </div>
    </div>
  );
};

export default BodyTitle;
