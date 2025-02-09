"use client";
import { FC } from "react";
import style from "./headDesc.module.css";
const HeadDescription: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["title"]}>
        <h1>Web and Mobile App Development Company</h1>
      </div>
      <div className={style["description"]}>
        <p>
          Clevit provides meaninful service that includes advanced web and
          mobile apps as well as the latest AI solutions, designed to accelerate
          growth and boost your business.
        </p>
      </div>
      <div className={style["btn"]}>
        <button>Request A Quote</button>
      </div>
    </div>
  );
};

export default HeadDescription;
