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
          <Link href={"/"} className={style["logo"]}>
            {" "}
            <img src="LOGO Light.png" alt="Logo" />
          </Link>
        </div>
        <div className={style["nav_bar"]}>
          <div className={style["bar_content"]}>
            <Link
              className={style["content_Services"]}
              href={"https://www.clevit.io/services"}
            >
              Services
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/about-us"}
            >
              About Us
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/#technologies"}
            >
              Technologies
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/#technologies"}
            >
              Industries
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/faq"}
            >
              FAQ
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/blogs"}
            >
              Blog
            </Link>
            <Link
              className={style["content_link"]}
              href={"https://www.clevit.io/contact-us"}
            >
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
            <Link
              className={style["btn_test"]}
              href={"https://www.clevit.io/request-demo"}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      {}
      {isMenuOpen && (
        <div className={style["fullscreen"]}>
          <button className={style["close_btn"]} onClick={handleMenuToggle}>
            <FaTimes />
          </button>
          <div className={style["menu_options"]}>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/services"}
            >
              Services
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/about-us"}
            >
              About Us
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/#technologies"}
            >
              Technologies
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/#industries"}
            >
              Industries
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/faq"}
            >
              FAQ
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/blogs"}
            >
              Blog
            </Link>
            <Link
              className={style["menu_link"]}
              href={"https://www.clevit.io/contact-us"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
