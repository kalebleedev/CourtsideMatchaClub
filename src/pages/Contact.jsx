import logo from "../assets/pics/Courtside Matcha Club Logo.png";
import { NavBar, EventForm } from "../assets/components";

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
                                   <button>Book Now</button>
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

                        <div className="footer-nav">
                            <h3>Our Work</h3>
                            <NavBar />
                        </div>

                        <div className="footer-socials">
                            <h3>Follow</h3>
                            <p>Instagram</p>
                            <p>TikTok</p>
                            <p>Stay In Touch!</p>
                        </div>
                  </div>
       
        </div>
    )
}

