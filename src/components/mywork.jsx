import style from "./mywork.module.css"
const Mywork=()=>{
    return(
        <>
        <div className={`${style["mywork"]}`} id="work">
            <p className={`${style["mywork-title"]}`}>
                My latest Works</p>
                <div className={`${style["works"]}`}>
                    <div className={`${style["work"]}`}></div>
                    <div className={`${style["work"]}`}></div>
                </div>
        </div>
        </>
    )
}
export default Mywork;