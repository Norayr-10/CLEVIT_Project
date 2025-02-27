"use client";

import { FC } from "react";
import style from "./footer.module.css";

const Footer: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content"]}>
        <div className={style["description"]}>
          <div className={style["first"]}></div>
          <div className={style["second"]}></div>
          <div className={style["third"]}></div>
          <div className={style["fourth"]}></div>
          <div className={style["fivth"]}></div>
        </div>
        <div className={style["footer"]}></div>
      </div>
    </div>
  );
};

export default Footer;
