import style from "./Hero.module.css";
import { useEffect } from "react";
const Hero = () => {
  useEffect(() => {
    const element = document.getElementById("welcometext");
    setTimeout(() => {
      element.classList.add("active");
    }, 100);
  }, []);
  return (
    <div className={`${style["hero"]}`} id="home">
      <div className={`${style["main"]}`}>
        <h1>
          <span>Hello</span>
          <span>
            {" "}
            I'm <br /> Sourabh Chand,
            <br />
          </span>
        </h1>
        <p>PASSIONATE FRONTEND WEB DEVELOPER</p>
        <div className={`${style["hero-action"]}`}>
          <div className={`${style["hero-connect"]}`}> <a href="#contact">Connect with me </a> </div>
          <a
            href="/resume.pdf"
            download
            className={style["hero-resume"]}
          >
            My Resume
          </a>
        </div>
      </div>
      <div className={`${style["welcome"]}`}>
        <p  className={`${style["welcome"]}`} id="welcometext">WELCOMING YOU!!!</p>
      </div>
    </div>
  );
};

export default Hero;

