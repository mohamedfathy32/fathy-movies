// import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ImGithub } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import "./Footer.css";

export default function Footer() {
  const language = useSelector((state) => state.lang.language);
  return (
    <>
      <div className="text-center p-5 bg-dark">
        <div>
          <h4 className="text-light">
            {language == "en" ? "Follow Us" : " تابعنا "}
          </h4>
          <div className="d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/mohamed-fathy-3a3a49239/"
              target="_blank"
              className="ms-2 icon rounded-circle"
              style={{ backgroundColor: "#ff9800" }}
            >
              <CiLinkedin className="fs-3 m-2 text-white" />
            </a>
            <a
              href="https://github.com/mohamedfathy32"
              target="_blank"
              className="ms-2 icon rounded-circle"
              style={{ backgroundColor: "#ff9800" }}
            >
              <ImGithub className="fs-3 m-2 text-white" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004560096021"
              target="_blank"
              className="ms-2 icon rounded-circle"
              style={{ backgroundColor: "#ff9800" }}
            >
              <FaFacebookF className="fs-3 m-2 text-white" />
            </a>
            <a
              href="https://www.instagram.com/mohamed_fathy26/"
              target="_blank"
              className="ms-2 icon rounded-circle"
              style={{ backgroundColor: "#ff9800" }}
            >
              <LuInstagram className="fs-3 m-2 text-white" />
            </a>
            <a
              href="https://x.com/mohamed_fathy38"
              target="_blank"
              className="ms-2 icon rounded-circle"
              style={{ backgroundColor: "#ff9800"}}
            >
              <FaTwitter className="fs-3 m-2 text-white" />
            </a>
            <a
              href="https://wa.me/01094976357"
              target="_blank"
              className="ms-2 icon rounded-circle"
              style={{ backgroundColor: "#ff9800" }}
            >
              <FaWhatsapp className="fs-3 m-2 text-white" />
            </a>
          </div>
          <p className="text-light p-2">
            {language == "en" ? "Powered by " : " تم بواسطة "}

            <a
              href="https://www.linkedin.com/in/mohamed-fathy-3a3a49239/"
              target="_blank"
              className="icon text-decoration-none"
            >
              {language == "en" ? "mohamed fathy" : "محمد فتحى"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
