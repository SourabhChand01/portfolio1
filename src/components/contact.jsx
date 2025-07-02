import style from "./contact.module.css"
import iconMail from "../store/mail-icon.svg"
import location from "../store/location.svg"
import linkedin from "../store/linkedin white.svg"
import github from "../store/github white.svg"
import { useState } from "react"

const Contact=()=>{

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e88c03b-41df-47c6-932b-85e50327368c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Thank you! Your message was sent successfully.");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



    return(
        <>
        <div className={`${style["contact"]}`} id="contact">
            <div className={`${style["contact-title"]}`}>
                <h1>Get in touch</h1>
                </div>
                <div className={`${style["contact-section"]}`}>
                    <div className="contact-left">
                        <h1 className={`${style["contact-left_h1"]}`}>Let's Talk</h1>
                        <p className={`${style["contact-left_p"]}`}>I'm currently open to internships where I can apply my skills in HTML, CSS, JavaScript, React, and Redux. <br /> I'm passionate about building clean, responsive interfaces and excited to learn through real-world experience. <br /> Let's connect!</p>
                        <div className={`${style["contact-details"]}`}>
                            <div className={`${style["contact-detail"]}`}>
                                <div className={`${style["icons"]}`}><img src={iconMail} alt="mail"></img>
                                
                                </div>
                                <p><a href="mailto:sourdevelopements@gmail.com">sourdevelopements@gmail.com</a></p>
                            </div>
                        
                        
                        
                        <div className={`${style["contact-detail"]}`} >
                            <div className={`${style["icons"]}`}>
                                <img src={location} alt="mail"></img></div>
                                <p>India</p>
                                
                            
                        </div>
                        </div>
                        </div>
                        <form onSubmit={onSubmit} className={`${style["contact-right"]}`}>
                
                            <label htmlFor="name"  className={`${style["contact-right_label"]}`}>Your Name</label>
                            <input type="text"  placeholder="Enter your name" id="name" name="name"/>
                        <label htmlFor="mail" className={`${style["contact-right_label"]}`}>Your Email</label>
                            <input type="email"  placeholder="Enter your Email address" id="mail" name="mail"/>
                        <label htmlFor="message" className={`${style["contact-right_label"]}`}>Write your message here</label>
                            <textarea rows={6} cols={10} placeholder="Enter your message" id="message" name="message"/>
                        <button type="submit" className={`${style["contact-submit"]}`} >Submit</button>
                        </form>
                        </div>
                    
                </div>
        
        </>
    )
}
export default Contact;