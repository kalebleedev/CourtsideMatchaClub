import { useState, useEffect, useRef } from "react";
import logo from "../assets/pics/Courtside Matcha Club Logo.png";
import { NavBar, InstagramFeed, RecentEvents, LoadingScreen } from "../assets/components";
import { Link} from "react-router";
import Contact from "./Contact";

export default function Media(){
     const [loading, setLoading] = useState(true);
        const feedRef = useRef(null);
        useEffect(() => {
    
            if(document.querySelector("#elfsight-script")){
                return;
            }
    
            const script = document.createElement("script");
            script.id = "elfsight-script";
            script.src="https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }, []);
    
        useEffect(() => {
            setLoading(true);
    
            const feed = feedRef.current;
            if (!feed) return;
    
            let cancelled = false;
            let observer;
    
            const minimumDelay = new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
    
            const feedLoaded = new Promise((resolve) => {
                const checkLoaded = () => {
                    const iframe = feed.querySelector("iframe");
                    if(iframe){
                        resolve();
                        observer?.disconnect();
                    }
                };
    
                observer = new MutationObserver(checkLoaded);
    
                observer.observe(feed, {
                    childList: true,
                    subtree: true
                });
    
                checkLoaded();
            });
    
            const timeout = new Promise((resolve) => {
                setTimeout(resolve, 8000);
            });
    
            async function waitForFeed(){
                await Promise.all([minimumDelay, Promise.race([feedLoaded, timeout])]);
                if (!cancelled){
                    setLoading(false);
                }
            }
    
            waitForFeed();
    
            return () => {
                cancelled = true;
                observer?.disconnect();
            };
    
        }, []);
    
    return(
        <>
        {loading && <LoadingScreen/>}
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

            <div className="media-content" ref={feedRef}>
                    <InstagramFeed  widgetId="b6b3819f-d258-4d56-bf89-686037604028"/>
            </div>

            <div className="recent-events-container">
                <RecentEvents/>
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
        </>
    )
}

