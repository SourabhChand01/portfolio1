import style from "./aboutme.module.css"
import Skills from "./skills";

const  Aboutme= () => {
  return (
    <>
    <div className={`${style["aboutme-section"]}`} id="aboutme">
        <p className={`${style["title"]}`}>About me</p>
        <div className={`${style["aboutme"]}`}>
            <p>Hi, I'm Sourabh, a front-end developer and student passionate about crafting seamless, interactive experiences. I specialize in React.js, HTML, and CSS, blending creativity with functionality to bring designs to life. I enjoy working on dynamic user interfaces, solving complex problems, and continuously learning new technologies to enhance user interactions. From structured layouts to engaging animations, I strive to create front-end experiences that are both visually stunning and technically sound. My goal is to gain hands-on experience through an internship, refining my skills and contributing to meaningful projects that push the boundaries of web development.</p>
        </div>
        <div className={`${style["stats"]}`}>
          <div className={`${style["group"]}`}>
            <Skills/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Aboutme;