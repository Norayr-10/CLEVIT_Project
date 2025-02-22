import { FC } from "react";
import style from "./process.module.css";

const Process: FC = () => {
  return (
    <div className={style.container}>
      <div className={style["title"]}>
        <h2>Processes We Follow</h2>
      </div>
      <div className={style["description"]}>
        <div className={style.box}>
          <div className={style["box_Number"]}>
            <div className={style.back}>
              {" "}
              <p>01</p>
            </div>{" "}
          </div>
          <div className={style["box_content"]}>
            <div className={style["box_Description"]}>
              <img src="Vector (7).png" alt="" />
              <p>Research & </p>
              <p>Business analysis</p>
            </div>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.box}>
          <div className={style["box_Number"]}>
            <div className={style.back}>
              {" "}
              <p>02</p>
            </div>{" "}
          </div>
          <div className={style["box_content"]}>
            <div className={style["box_Description"]}>
              <img src="Frame 289308 (7).png" alt="" />
              <p>UI/UX Design </p>
              <p>& Prototypes</p>
            </div>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.box}>
          <div className={style["box_Number"]}>
            <div className={style.back}>
              {" "}
              <p>03</p>
            </div>{" "}
          </div>
          <div className={style["box_content"]}>
            <div className={style["box_Description"]}>
              <img src="Frame 289308 (4).png" alt="" />
              <p>Development & </p>
              <p>Integration</p>
            </div>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.box}>
          <div className={style["box_Number"]}>
            <div className={style.back}>
              {" "}
              <p>04</p>
            </div>
          </div>
          <div className={style["box_content"]}>
            <div className={style["box_Description"]}>
              <img src="Frame 289308 (1).png" alt="" />
              <p>Support & </p>
              <p>Evolution</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style["secoundContainer"]}>
        <div className={style["third_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>01</p>
              </div>{" "}
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Vector (7).png" alt="" />
                <p>Research & </p>
                <p>Business analysis</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["fourth_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>02</p>
              </div>{" "}
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Frame 289308 (7).png" alt="" />
                <p>UI/UX Design </p>
                <p>& Prototypes</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["third_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>03</p>
              </div>{" "}
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Frame 289308 (4).png" alt="" />
                <p>Development & </p>
                <p>Integration</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["fourth_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>04</p>
              </div>
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Frame 289308 (1).png" alt="" />
                <p>Support & </p>
                <p>Evolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style["third_contiener"]}>
        <div className={style["third_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>01</p>
              </div>{" "}
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Vector (7).png" alt="" />
                <p>Research & </p>
                <p>Business analysis</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["fourth_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>02</p>
              </div>{" "}
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Frame 289308 (7).png" alt="" />
                <p>UI/UX Design </p>
                <p>& Prototypes</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["third_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>03</p>
              </div>{" "}
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Frame 289308 (4).png" alt="" />
                <p>Development & </p>
                <p>Integration</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style["fourth_box"]}>
          <div className={style.box}>
            <div className={style["box_Number"]}>
              <div className={style.back}>
                {" "}
                <p>04</p>
              </div>
            </div>
            <div className={style["box_content"]}>
              <div className={style["box_Description"]}>
                <img src="Frame 289308 (1).png" alt="" />
                <p>Support & </p>
                <p>Evolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
