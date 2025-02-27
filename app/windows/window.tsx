"use client";

import { FC } from "react";
import style from "./window.module.css";

const Window: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["title"]}>
        <h2>What People Say</h2>
      </div>
      <div className={style["content"]}>
        <div className={style["box"]}>
          <div className={style["logo"]}>
            <img src="1630633064759 1.png" alt="" />
          </div>
          <div className={style["description"]}>
            <p>
              Clevit's dedication, skill, and timeliness truly made this
              collaboration a remarkable success. Their team displayed a deep
              understanding of the project requirements and provided valuable
              insights that enhanced the project's overall design and
              functionality. Thank you for the exceptional work. I
              wholeheartedly recommend Clevit.
            </p>
          </div>
          <div className={style["footer"]}>
            <h5>Kyle Bradford</h5>
            <p>Lead Consultant at Renegade Technology</p>
          </div>
        </div>
        <div className={style["boxA"]}>
          <div className={style["logo"]}>
            <img src="Union.png" alt="" />
          </div>
          <div className={style["description"]}>
            <p>
              I have enjoyed working with Clevit over and above many others
              because of his ability to gauge when a problem needs to be solved
              right and when a problem needs to be solved quickly. Their team
              learns new technology at an exceptional rate and always strives to
              do an excellent. They helped me a lot with their high level of
              technical knowledge because they have a great understanding of the
              nuances of the programming world.
            </p>
          </div>
          <div className={style["footer"]}>
            <h5>Vig Zartman</h5>
            <p>CEO and owner of Oblivioni</p>
          </div>
        </div>
        <div className={style["boxB"]}>
          <div className={style["logo"]}>
            <img src="SQOR-logo-beta 1.png" alt="" />
          </div>
          <div className={style["description"]}>
            <p>
              The Clevit team produced very solid code that meets the highest
              and most current standards. We were very happy with the Clevit
              team and wish them continued success.
            </p>
          </div>
          <div className={style["footer"]}>
            <h5>Laz Fuentes</h5>
            <p>CEO and Founder of SQOR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
