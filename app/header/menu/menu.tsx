"use client";
import { FC, useState } from "react";
import style from "./menu.module.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={style["container"]}>
      <div className={style["content"]}>
        <div className={style["logo"]}>
          <img src="LOGO Light.png" alt="Logo" />
        </div>
        <div className={style["nav_bar"]}>
          <div className={style["bar_content"]}>
            <Link className={style["content_Services"]} href={""}>
              Services
            </Link>
            <Link className={style["content_link"]} href={""}>
              Portfolio
            </Link>
            <Link className={style["content_link"]} href={""}>
              About Us
            </Link>
            <Link className={style["content_link"]} href={""}>
              Technologies
            </Link>
            <Link className={style["content_link"]} href={""}>
              Industries
            </Link>
            <Link className={style["content_link"]} href={""}>
              FAQ
            </Link>
            <Link className={style["content_link"]} href={""}>
              Blog
            </Link>
            <Link className={style["content_link"]} href={""}>
              Contact Us
            </Link>
            {}
            <Link
              className={style["Bar_icon"]}
              href={""}
              onClick={handleMenuToggle}
            >
              <FaBars />
            </Link>
          </div>
          <div className={style["bar_btn"]}>
            <Link className={style["btn_logo"]} href={""}>
              <img src="Vector@2x.png" alt="Logo" />
            </Link>
            <Link className={style["btn_test"]} href={""}>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      {}
      {isMenuOpen && (
        <div className={style["fullscreen"]}>
          <button
            className={style["close_btn"]}
            onClick={handleMenuToggle}
          >
            <FaTimes />
          </button>
          <div className={style["menu_options"]}>
            <Link className={style["menu_link"]} href={""}>
              Services
            </Link>
            <Link className={style["menu_link"]} href={""}>
              Portfolio
            </Link>
            <Link className={style["menu_link"]} href={""}>
              About Us
            </Link>
            <Link className={style["menu_link"]} href={""}>
              Technologies
            </Link>
            <Link className={style["menu_link"]} href={""}>
              Industries
            </Link>
            <Link className={style["menu_link"]} href={""}>
              FAQ
            </Link>
            <Link className={style["menu_link"]} href={""}>
              Blog
            </Link>
            <Link className={style["menu_link"]} href={""}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
