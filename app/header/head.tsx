"use client"
import { FC } from "react";
import style from "./head.module.css";
import Menu from "./menu/menu";
import HeadDescription from "./headDescription/headDesc";

const Header: FC = () => {
  return (
    <div className={style["container"]}>
      <Menu />
      <HeadDescription/>
    </div>
  );
};

export default Header;
