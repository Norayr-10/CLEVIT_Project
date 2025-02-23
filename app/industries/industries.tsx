import { FC } from "react";
import style from "./industries.module.css";

const Industries: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content"]}>
        <div className={style["title"]}>
          <h2>Industries</h2>
        </div>
        <div className={style["description"]}>
          <div className={style["first_industries"]}>
            <p>Media & Entertainment</p>
            <p>Technology & Software Development</p>
            <p>Online Booking Platforms</p>
            <p>Mobile Application Development</p>
            <p>Cyber Security</p>
          </div>
          <div className={style["first_industries"]}>
            <p>Logistics & transportation</p>
            <p>Artificial Intelligence (AI)</p>
            <p>Software as a Service (saas)</p>
            <p>Data Analytics</p>
            <p>Dashboard Development</p>
          </div>
          <div className={style["third_industries"]}>
            <p>Task Management System</p>
            <p>Recruitment and Staffing</p>
            <p>Education and Training</p>
            <p>Medical Software Development</p>
            <p>Insurances</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
