import style from "./footer.module.css"
import linkedinlogo from "../store/linkedin white.svg"
import github from "../store/github white.svg"
const Footer=()=>{
    return(
        <>
        <div className={`${style["footer"]}`}>
        {/* <div className={`${style["footer-1"]}`}>
            <p className={`${style["footer-logo"]}`}>Sourabh</p>
            <p className={`${style["footer-intro"]}`}> A frontend web developer.</p>
        </div> */}
        <div className={`${style["footer-main"]}`}>
        <div className={`${style["footer-2"]}`} id="connect">
            <div className={`${style["footer-social"]}`}><a href="#"><img src={linkedinlogo} alt="linkedin"></img></a></div>
            <div className={`${style["footer-social"]}`}><a href="https://github.com/SourabhChand01"><img src={github} alt="github"></img></a></div>
        </div>
        <div className={`${style["footer-3"]}`}>
            <ul>
                <li><a href="#nav">Home</a></li>
                <li><a href="#aboutme">About Me</a></li>
                {/* <li><a href="#work">Work</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </div>
        </div>
        </>
    )
}
export default Footer;