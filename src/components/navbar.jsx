import { CiMenuFries } from "react-icons/ci";
import style from "./navbar.module.css"
const Navbar = () => {
  onclick=()=>{
    console.log("ok");
  }
  return (
    <>
    <div className={`${style["navbar"]}`} id="nav">
        <div className={`${style["logo"]}`}>
                    <p className={`${style["logo-line1"]}`}>Sourabh</p>
                    <p className={`${style["logo-line2"]}`}> A frontend web developer.</p>
                </div>
        <ul className={`${style["menu"]}`}>
            <li><a href="#nav">Home</a></li>
            <li id="about-details"><a href="#aboutme">About </a> </li>
            <li><a href="#interest">Interest</a></li>
            {/* <li><a href="#work">Portfolio</a></li> */}
            <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={`${style["connect"]}`}><a href="#contact">Connect with me </a> </div>
          <div className={`${style["menu-opt"]}`} ><a href="#contact"><CiMenuFries /></a></div>
          
    </div>
    </>
  )
}

export default Navbar;