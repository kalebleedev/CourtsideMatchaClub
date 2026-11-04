import logo from "../assets/pics/Courtside Matcha Club Logo.png";
import { NavBar, EventForm } from "../assets/components";
import { Link } from "react-router";

export default function Contact(){
    return(
       <div className="page-structure">
                   <div className="header">
                           <div className="header-left">
                                   <img src={logo}/>
                           </div>
                           
                           <div className="navigation">
                               <NavBar />
                           </div>
           
                           <div className="header-right">
                                   <Link to="/contact" className="book-now-btn">Book Now</Link>
                           </div>
                   </div>

                   <div className="contact-form">
                        <EventForm />
                   </div>

                    <div className="footer">
                        <div className="business-info">
                            <p>Courtside Matcha Club LLC</p>
                            <p>CourtsideMatchaClub@gmail.com</p>
                            <p>Est. 2026</p>
                        </div>

                        

                        <div className="footer-socials">
                            <h3>Follow</h3>
                            <a href="https://www.instagram.com/courtsidematchaclub/" target="_blank" rel="noopener noreferrer" className="icon"><i class="bi bi-instagram"></i></a>
                            <p>Stay In Touch!</p>
                        </div>
                  </div>
       
        </div>
    )
}

