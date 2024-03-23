import { Navbar} from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Work from "./components/AboutMe/aboutme";
import AboutMe from "./components/Work/work";
import Exprience from "./components/Exprience/exprience";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Work/>
     <Exprience/>
     <AboutMe/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
