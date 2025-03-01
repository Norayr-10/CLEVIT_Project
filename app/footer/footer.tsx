"use client";

import { FC } from "react";
import style from "./footer.module.css";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { TbPhone } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";

const Footer: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content"]}>
        <div className={style["description"]}>
          <div className={style["first"]}>
            <div className={style["about_us"]}>
              <img src="LOGO Light.png" alt="" />
              <p>
                As a leading web and mobile app development company, Clevit
                empowers businesses across all sectors to unlock their full
                digital potential. Our team of skilled web app developers
                delivers top-notch web, mobile, and AI-driven solutions tailored
                to your unique needs and business goals. Whether you're a
                startup or an established company, Clevit is your trusted
                partner for all your digital needs. 
              </p>
            </div>
            <div className={style["apps"]}>
              <Link href={""} className={style["links"]}>
                <FaLinkedin />
              </Link>
              <Link href={""} className={style["links"]}>
                <FaFacebook />
              </Link>
              <Link href={""} className={style["links"]}>
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className={style["second"]}>
            <h2 className={style["title"]}>Company</h2>
            <Link href={""} className={style["second_links"]}>
              About Us
            </Link>
            <Link href={""} className={style["second_links"]}>
              Services
            </Link>
            <Link href={""} className={style["second_links"]}>
              portfolio
            </Link>
            <Link href={""} className={style["second_links"]}>
              Technologies
            </Link>
            <Link href={""} className={style["second_links"]}>
              Blog
            </Link>
            <Link href={""} className={style["second_links"]}>
              Contact Us
            </Link>
          </div>
          <div className={style["third"]}>
            <h2 className={style["title"]}>Services</h2>
            <Link href={""} className={style["second_links"]}>
              Web Development
            </Link>
            <Link href={""} className={style["second_links"]}>
              Mobile App Development
            </Link>
            <Link href={""} className={style["second_links"]}>
              DevOps
            </Link>
            <Link href={""} className={style["second_links"]}>
              AI Integration
            </Link>
            <Link href={""} className={style["second_links"]}>
              Machine Learning Development
            </Link>
            <Link href={""} className={style["second_links"]}>
              Quality Assurance
            </Link>
            <Link href={""} className={style["second_links"]}>
              Technical Assessment
            </Link>
            <Link href={""} className={style["second_links"]}>
              Support & Maintenance
            </Link>
            <Link href={""} className={style["second_links"]}>
              Outstaffing
            </Link>
            <Link href={""} className={style["second_links"]}>
              Project Management
            </Link>
            <Link href={""} className={style["second_links"]}>
              UI/UX Design
            </Link>
            <Link href={""} className={style["second_links"]}>
              Digital Marketing
            </Link>
          </div>
          <div className={style["fourth"]}>
            <h2 className={style["title"]}>Contact Us</h2>
            <div className={style["events"]}>
              <Link href={""} className={style["envelope"]}>
                <FaRegEnvelope />
              </Link>
              <Link href={""} className={style["envelope"]}>
                info@clevit.com
              </Link>
            </div>
            <div className={style["events"]}>
              <Link href={""} className={style["envelope"]}>
                <TbPhone />
              </Link>
              <Link href={""} className={style["envelope"]}>
                {" "}
                +374 96 555 555
              </Link>
            </div>
          </div>
          <div className={style["fivth"]}>
            <h2 className={style["title"]}>Latest Blog Posts</h2>
            <div className={style["appointment"]}>
              <div className={style["small_image"]}>
                <img src="Rectangle 45.png" alt="" />
              </div>
              <div className={style["oppointment_description"]}>
                <div className={style["calender"]}>
                  <CiCalendar className={style["calendar"]} />
                  <div className={style["calender_description"]}>
                    05 Apr., 2024
                  </div>
                </div>
                <div className={style["test"]}>
                  <p>Your Business safe...</p>
                </div>
              </div>
            </div>
            <div className={style["appointment"]}>
              <div className={style["small_image"]}>
                <img src="Rectangle 46.png" alt="" />
              </div>
              <div className={style["oppointment_description"]}>
                <div className={style["calender"]}>
                  <CiCalendar className={style["calendar"]} />
                  <div className={style["calender_description"]}>
                    12 Apr., 2024
                  </div>{" "}
                </div>
                <div className={style["test"]}>
                  <p>Data Security and...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["second_descriptio"]}>
          <div className={style["second_up"]}>
            <div className={style["first"]}>
              <div className={style["about_us"]}>
                <img src="LOGO Light.png" alt="" />
                <p>
                  As a leading web and mobile app development company, Clevit
                  empowers businesses across all sectors to unlock their full
                  digital potential. Our team of skilled web app developers
                  delivers top-notch web, mobile, and AI-driven solutions
                  tailored to your unique needs and business goals. Whether
                  you're a startup or an established company, Clevit is your
                  trusted partner for all your digital needs. 
                </p>
              </div>
              <div className={style["apps"]}>
                <Link href={""} className={style["links"]}>
                  <FaLinkedin />
                </Link>
                <Link href={""} className={style["links"]}>
                  <FaFacebook />
                </Link>
                <Link href={""} className={style["links"]}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <div className={style["second"]}>
              <h2 className={style["title"]}>Company</h2>
              <Link href={""} className={style["second_links"]}>
                About Us
              </Link>
              <Link href={""} className={style["second_links"]}>
                Services
              </Link>
              <Link href={""} className={style["second_links"]}>
                portfolio
              </Link>
              <Link href={""} className={style["second_links"]}>
                Technologies
              </Link>
              <Link href={""} className={style["second_links"]}>
                Blog
              </Link>
              <Link href={""} className={style["second_links"]}>
                Contact Us
              </Link>
            </div>

            <div className={style["third"]}>
              <h2 className={style["title"]}>Services</h2>
              <Link href={""} className={style["second_links"]}>
                Web Development
              </Link>
              <Link href={""} className={style["second_links"]}>
                Mobile App Development
              </Link>
              <Link href={""} className={style["second_links"]}>
                DevOps
              </Link>
              <Link href={""} className={style["second_links"]}>
                AI Integration
              </Link>
              <Link href={""} className={style["second_links"]}>
                Machine Learning Development
              </Link>
              <Link href={""} className={style["second_links"]}>
                Quality Assurance
              </Link>
              <Link href={""} className={style["second_links"]}>
                Technical Assessment
              </Link>
              <Link href={""} className={style["second_links"]}>
                Support & Maintenance
              </Link>
              <Link href={""} className={style["second_links"]}>
                Outstaffing
              </Link>
              <Link href={""} className={style["second_links"]}>
                Project Management
              </Link>
              <Link href={""} className={style["second_links"]}>
                UI/UX Design
              </Link>
              <Link href={""} className={style["second_links"]}>
                Digital Marketing
              </Link>
            </div>
          </div>
          <div className={style["second_down"]}>
            <div className={style["content_second_down"]}>
              <div className={style["fourth"]}>
                <h2 className={style["title"]}>Contact Us</h2>
                <div className={style["events"]}>
                  <Link href={""} className={style["envelope"]}>
                    <FaRegEnvelope />
                  </Link>
                  <Link href={""} className={style["envelope"]}>
                    info@clevit.com
                  </Link>
                </div>
                <div className={style["events"]}>
                  <Link href={""} className={style["envelope"]}>
                    <TbPhone />
                  </Link>
                  <Link href={""} className={style["envelope"]}>
                    {" "}
                    +374 96 555 555
                  </Link>
                </div>
              </div>
              <div className={style["fivth"]}>
                <h2 className={style["title"]}>Latest Blog Posts</h2>
                <div className={style["appointment"]}>
                  <div className={style["small_image"]}>
                    <img src="Rectangle 45.png" alt="" />
                  </div>
                  <div className={style["oppointment_description"]}>
                    <div className={style["calender"]}>
                      <CiCalendar className={style["calendar"]} />
                      <div className={style["calender_description"]}>
                        05 Apr., 2024
                      </div>
                    </div>
                    <div className={style["test"]}>
                      <p>Your Business safe...</p>
                    </div>
                  </div>
                </div>
                <div className={style["appointment"]}>
                  <div className={style["small_image"]}>
                    <img src="Rectangle 46.png" alt="" />
                  </div>
                  <div className={style["oppointment_description"]}>
                    <div className={style["calender"]}>
                      <CiCalendar className={style["calendar"]} />
                      <div className={style["calender_description"]}>
                        12 Apr., 2024
                      </div>{" "}
                    </div>
                    <div className={style["test"]}>
                      <p>Data Security and...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style["footer_lastTouch"]}>
          <div className={style["head"]}>
            <div className={style["first"]}>
              <div className={style["about_us"]}>
                <img src="LOGO Light.png" alt="" />
                <p>
                  As a leading web and mobile app development company, Clevit
                  empowers businesses across all sectors to unlock their full
                  digital potential. Our team of skilled web app developers
                  delivers top-notch web, mobile, and AI-driven solutions
                  tailored to your unique needs and business goals. Whether
                  you're a startup or an established company, Clevit is your
                  trusted partner for all your digital needs. 
                </p>
              </div>
              <div className={style["apps"]}>
                <Link href={""} className={style["links"]}>
                  <FaLinkedin />
                </Link>
                <Link href={""} className={style["links"]}>
                  <FaFacebook />
                </Link>
                <Link href={""} className={style["links"]}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          <div className={style["body"]}>
            <div className={style["second"]}>
              <h2 className={style["title"]}>Company</h2>
              <Link href={""} className={style["second_links"]}>
                About Us
              </Link>
              <Link href={""} className={style["second_links"]}>
                Services
              </Link>
              <Link href={""} className={style["second_links"]}>
                portfolio
              </Link>
              <Link href={""} className={style["second_links"]}>
                Technologies
              </Link>
              <Link href={""} className={style["second_links"]}>
                Blog
              </Link>
              <Link href={""} className={style["second_links"]}>
                Contact Us
              </Link>
            </div>
            <div className={style["third"]}>
              <h2 className={style["title"]}>Services</h2>
              <Link href={""} className={style["second_links"]}>
                Web Development
              </Link>
              <Link href={""} className={style["second_links"]}>
                Mobile App Development
              </Link>
              <Link href={""} className={style["second_links"]}>
                DevOps
              </Link>
              <Link href={""} className={style["second_links"]}>
                AI Integration
              </Link>
              <Link href={""} className={style["second_links"]}>
                Machine Learning Development
              </Link>
              <Link href={""} className={style["second_links"]}>
                Quality Assurance
              </Link>
              <Link href={""} className={style["second_links"]}>
                Technical Assessment
              </Link>
              <Link href={""} className={style["second_links"]}>
                Support & Maintenance
              </Link>
              <Link href={""} className={style["second_links"]}>
                Outstaffing
              </Link>
              <Link href={""} className={style["second_links"]}>
                Project Management
              </Link>
              <Link href={""} className={style["second_links"]}>
                UI/UX Design
              </Link>
              <Link href={""} className={style["second_links"]}>
                Digital Marketing
              </Link>
            </div>
          </div>
          <div className={style["last_part"]}>
            <div className={style["fourth"]}>
              <h2 className={style["title"]}>Contact Us</h2>
              <div className={style["events"]}>
                <Link href={""} className={style["envelope"]}>
                  <FaRegEnvelope />
                </Link>
                <Link href={""} className={style["envelope"]}>
                  info@clevit.com
                </Link>
              </div>
              <div className={style["events"]}>
                <Link href={""} className={style["envelope"]}>
                  <TbPhone />
                </Link>
                <Link href={""} className={style["envelope"]}>
                  {" "}
                  +374 96 555 555
                </Link>
              </div>
            </div>
            <div className={style["fivth"]}>
              <h2 className={style["title"]}>Latest Blog Posts</h2>
              <div className={style["appointment"]}>
                <div className={style["small_image"]}>
                  <img src="Rectangle 45.png" alt="" />
                </div>
                <div className={style["oppointment_description"]}>
                  <div className={style["calender"]}>
                    <CiCalendar className={style["calendar"]} />
                    <div className={style["calender_description"]}>
                      05 Apr., 2024
                    </div>
                  </div>
                  <div className={style["test"]}>
                    <p>Your Business safe...</p>
                  </div>
                </div>
              </div>
              <div className={style["appointment"]}>
                <div className={style["small_image"]}>
                  <img src="Rectangle 46.png" alt="" />
                </div>
                <div className={style["oppointment_description"]}>
                  <div className={style["calender"]}>
                    <CiCalendar className={style["calendar"]} />
                    <div className={style["calender_description"]}>
                      12 Apr., 2024
                    </div>{" "}
                  </div>
                  <div className={style["test"]}>
                    <p>Data Security and...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style["footer"]}>
          <div className={style["footer_content"]}>
            <div className={style["left"]}>
              <p className={style["footer_text"]}>
                Privacy Policy | Terms of Conditions
              </p>
            </div>
            <div className={style["right"]}>
              <p className={style["footer_text"]}>@ 2025 Clevit</p>
            </div>
          </div>
          <div className={style["second_footer"]}>
            <div className={style["right"]}>
              <p className={style["footer_text"]}>@ 2025 Clevit</p>
            </div>
            <div className={style["left"]}>
              <p className={style["footer_text"]}>
                Privacy Policy | Terms of Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
