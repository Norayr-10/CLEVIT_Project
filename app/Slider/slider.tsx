"use client";

import React, { useState } from "react";
import styles from "./slider.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const images: string[] = [
  "FlowopsDesktop-B4WLOuNV.webp",
  "OblivioniDesktop-CppL5-Zk.webp",
  "RenegadeDesktop-D7nZwEJ4.webp",
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles["image-container"]}>
      <h2>Web Apps We Developed</h2>

      <div className={styles["image_content"]}>
        <div className={styles["content"]}>
          <p className={styles["First_content"]}>Musicians</p>
          <h3 className={styles["secound_content"]}>Oblivioni</h3>
          <h4 className={styles["third_content"]}>
            The creative powerhouse that propels your visuals to new heights.
          </h4>
          <p className={styles["fourth_content"]}>
            Specializing in high-end motion pictures and commercial advertising,
            Oblivioni connects composers with those needing custom music. We've
            built an automated system and comprehensive admin section for
            efficient order management.
          </p>
          <div className={styles["fivth_content"]}>
            <div className={styles["first"]}>
              <h5 className={styles["small_title"]}> Type:</h5>
              <span className={styles["spans"]}>Web Development</span>
            </div>
            <div className={styles["secound"]}>
              <h5 className={styles["small_title"]}>Duration:</h5>
              <span className={styles["spans"]}>1 year</span>
            </div>
            <div className={styles["third"]}>
              <h5 className={styles["small_title"]}>Website:</h5>
              <Link href={`https://oblivioni.com/`} className={styles["link"]}>
                oblivioni
              </Link>
            </div>
            <div className={styles["fourth"]}>
              <h5 className={styles["small_title"]}>Technologies:</h5>
              <div className={styles["imagesAsLogo"]}>
                <img
                  className={styles["logo"]}
                  src="file-type-reactjs 1.png"
                  alt=""
                />
                <img
                  className={styles["logo"]}
                  src="Tailwind_CSS_Logo 1.png"
                  alt=""
                />
                <img className={styles["logo"]} src="Group 3231.png" alt="" />
                <img className={styles["logo"]} src="node-js 1.png" alt="" />
                <img className={styles["logo"]} src="Frame 5009.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["main_image_conatiner"]}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={styles.image}
          />
        </div>
      </div>
      <button className={styles["btn"]}>See More Projects</button>
      <button className={styles["left-button"]} onClick={goLeft}>
        <FaArrowLeft />
      </button>
      <button className={styles["right-button"]} onClick={goRight}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default App;
