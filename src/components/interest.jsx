import frontend from '../store/programming.svg'
import js from '../store/js.svg'
import creativity from '../store/bulb.svg'
import style from "./section1.module.css"
const Section1=()=>{
    return(
        <>
        <div className={`${style["subsection1"]}`} id='interest'>
            <h1 className={`${style["ilike"]}`}>Things I like</h1>
            <div className={`${style["likebox"]}`}>
                <div className={`${style["hobbies"]}`} id='firsthobbie'>
                    <div className={`${style["image"]}`}><img src={frontend} alt="" />
                    </div>
                    <h2>FrontEnd</h2>
                    <p>I'm front-end focused and love crafting seamless, engaging experiences with React.js, as well as clean, structured designs using pure HTML and CSS.</p>
                </div>
                
                <div className={`${style["hobbies"]}`}>
                    <div className={`${style["image"]}`}><img src={js} alt="" />
                    </div>
                    <h2>JS</h2>
                    <p>I like JavaScript because its flexibility lets me create dynamic, interactive experiences, making coding both powerful and fun.</p>
                </div>

                <div className={`${style["hobbies"]}`} id='aboutme'>
                    <div className={`${style["image"]}`}><img src={creativity} alt="" />
                    </div>
                    <h2>Creativity</h2>
                    <p>I believe that working on front-end challenges pushes my creativity further than I ever imagined—turning ideas into engaging, interactive experiences.</p>
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Section1;