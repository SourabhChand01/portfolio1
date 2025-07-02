import Aboutme from "./components/aboutme";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/Hero"
import Section1 from "./components/interest";
import Mywork from "./components/mywork";
import Navbar from "./components/navbar"

function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Aboutme/>
    <Section1/>
    <Contact/>
    <Footer/>
    </>
  ) 
}
export default App;