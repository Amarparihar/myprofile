import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <section className="home-section">
            <a style={{textDecoration:"none"}} href="https://github.com/Amarparihar" target="_blank" rel="noopener noreferrer">
            <span><FontAwesomeIcon icon={faGithub} size="4x"/> My Work</span>
            </a>
            <div className="container-fluid ">
            <div className="row gx-4 gx-lg-5 home-row1">
            <div className="col-md-10 col-lg-8 mx-auto homecontent">
                        <span>Hi there... ,</span>
                       <h1> <span>My Name Is</span> Amar Parihar 😎 </h1>
                       <div id="myWorkProfile">
                        <h3>I am a Full-Stack Developer</h3>
                    </div>
                    </div>
                    

                    <div className="box" id="box">
                   <Link to="/contactme">
                   <button id="btn-circle1"><span> Contact Me </span></button>
                   </Link>
                   <a href="https://drive.google.com/file/d/1gIXpRXlHED8NvPcW4RKxNxLTwmqVoFDA/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button id="btn-circle2"><span> Get CV</span></button></a>
              </div>  
                
              </div>  
            </div>
            </section>
        </>
    )
}