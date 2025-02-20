"use client";

import { FC, useState, useEffect } from "react";
import style from "./conmponent.module.css";
const Technologies: FC = () => {
  const [images, setImages] = useState<{ src: string; name: string }[]>([]);
  const [activeButton, setActiveButton] = useState<string>(
    "Front-End Development"
  );

  useEffect(() => {
    handleButtonClick(activeButton);
  }, []);
  const handleButtonClick = (category: string) => {
    setActiveButton(category);
    if (category === "Front-End Development") {
      setImages([
        { src: "file-type-reactjs 1.png", name: "React.JS" },
        { src: "Vue.js_Logo_2 1.png", name: "Vue.JS" },
        { src: "Group 3231.png", name: "Vit.JS" },
        { src: "Vector (5).png", name: "Next.JS" },
        { src: "material-ui 1.png", name: "Material UI" },
        { src: "Tailwind_CSS_Logo 1.png", name: "Tailwind CSS" },
        { src: "Group (1).png", name: "Ant Design" },
        { src: "file-type-reactjs 1 (1).png", name: "Cypress" },
        { src: "Group 3287.png", name: "HTML 5" },
        { src: "css3-svgrepo-com 1.png", name: "CSS3" },
        { src: "file-type-reactjs 1 (2).png", name: "SCSS (SASS)" },
        { src: "Group 3292.png", name: "TypeScript" },
      ]);
    } else if (category === "Mobile App Development") {
      setImages([
        { src: "file-type-reactjs 1.png", name: "React.JS" },
        { src: "Vue.js_Logo_2 1.png", name: "Vue.JS" },
        { src: "Group 3231.png", name: "Vit.JS" },
        { src: "Vector (5).png", name: "Next.JS" },
        { src: "material-ui 1.png", name: "Material UI" },
        { src: "Tailwind_CSS_Logo 1.png", name: "Tailwind CSS" },
      ]);
    } else if (category === "Back-End Development") {
      setImages([
        { src: "file-type-reactjs 1.png", name: "React.JS" },
        { src: "Vue.js_Logo_2 1.png", name: "Vue.JS" },
        { src: "Group 3231.png", name: "Vit.JS" },
        { src: "Vector (5).png", name: "Next.JS" },
        { src: "material-ui 1.png", name: "Material UI" },
        { src: "Tailwind_CSS_Logo 1.png", name: "Tailwind CSS" },
      ]);
    } else if (category === "Database Management") {
      setImages([
        { src: "file-type-reactjs 1.png", name: "React.JS" },
        { src: "Vue.js_Logo_2 1.png", name: "Vue.JS" },
        { src: "Group 3231.png", name: "Vit.JS" },
        { src: "Vector (5).png", name: "Next.JS" },
        { src: "material-ui 1.png", name: "Material UI" },
        { src: "Tailwind_CSS_Logo 1.png", name: "Tailwind CSS" },
        { src: "Group (1).png", name: "Ant Design" },
        { src: "file-type-reactjs 1 (1).png", name: "Cypress" },
        { src: "Group 3287.png", name: "HTML 5" },
        { src: "css3-svgrepo-com 1.png", name: "CSS3" },
        { src: "file-type-reactjs 1 (2).png", name: "SCSS (SASS)" },
        { src: "Group 3292.png", name: "TypeScript" },
      ]);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h2>Technologies We Use</h2>
        </div>
        <div className={style.button_content}>
          <div className={style.buttons}>
            <button
              className={style.button}
              onClick={() => handleButtonClick("Front-End Development")}
              style={{
                backgroundColor:
                  activeButton === "Front-End Development"
                    ? "#4f1d85"
                    : "#f8f7fd",
                color:
                  activeButton === "Front-End Development" ? "#fff" : "#314252",
              }}
            >
              Front-End Development
            </button>
            <button
              className={style.button}
              onClick={() => handleButtonClick("Mobile App Development")}
              style={{
                backgroundColor:
                  activeButton === "Mobile App Development"
                    ? "#4f1d85"
                    : "#f8f7fd",
                color:
                  activeButton === "Mobile App Development"
                    ? "#fff"
                    : "#314252",
              }}
            >
              Mobile App Development
            </button>
            <button
              className={style.button}
              onClick={() => handleButtonClick("Back-End Development")}
              style={{
                backgroundColor:
                  activeButton === "Back-End Development"
                    ? "#4f1d85"
                    : "#f8f7fd",
                color:
                  activeButton === "Back-End Development" ? "#fff" : "#314252",
              }}
            >
              Back-End Development
            </button>
            <button
              className={style.button}
              onClick={() => handleButtonClick("Database Management")}
              style={{
                backgroundColor:
                  activeButton === "Database Management"
                    ? "#4f1d85"
                    : "#f8f7fd",
                color:
                  activeButton === "Database Management" ? "#fff" : "#314252",
              }}
            >
              Database Management
            </button>
          </div>
          <div className={style.imageContainer}>
            {images.map((image, index) => (
              <div key={index} className={style.imageItem}>
                <img src={image.src} alt={image.name} className={style.image} />
                <div className={style.imageName}>{image.name}</div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
