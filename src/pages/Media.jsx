import logo from "../assets/pics/Courtside Matcha Club Logo.png";
import { NavBar, InstagramFeed, RecentEvents } from "../assets/components";
import { Link } from "react-router";
import Contact from "./Contact";

export default function Media(){
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

            <div className="media-content">
                    <InstagramFeed  widgetId="b6b3819f-d258-4d56-bf89-686037604028"/>
            </div>

            <div className="recent-events">
                <RecentEvents/>
            </div>

            <div className="socials">
                <p>Follow us on Socials</p>
                <button>Instagram</button>
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

