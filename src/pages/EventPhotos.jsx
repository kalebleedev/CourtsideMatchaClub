import {useState, useEffect } from "react";
import { sanityClient } from "../libs/sanity";
import {Link, useParams } from "react-router";
import { NavBar } from "../assets/components";
import logo from "../assets/pics/Courtside Matcha Club Logo.png";

export default function EventPhotos(){
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        let cancelled = false;
        async function fetchEventPhotos(){
            try{
                const query = `
                    *[_type == "Event" && _id == $id][0] {
                        _id,
                        title, 
                        date,
                        description,
                        "photos": gallery[]{
                            _key,
                            alt,
                            "url": asset->url
                        }
                    }
                `;

                const data = await sanityClient.fetch(query, {id});
                if (!cancelled){
                    setEvent(data);
                }
            } catch (error){
                console.error("Error fetching photos:", error);
            } finally {
                if (!cancelled){
                    setLoading(false);
                }
            }
        }
            if(id){
                fetchEventPhotos();
            } else {
                setLoading(false);
                setEvent(null);
            }

            return () =>{
                cancelled = true;
            }
    }, [id]);

    if (loading){
        return <p>Loading Event Photos</p>
    }

    return (
        <div className='page-structure'>
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

            <div className="event-photos-page">
            <h1>Event Photos</h1>

            {loading ? (
                <p>Loading Event Photos...</p>
            ) : !event ? (
                <p>Event not found</p> 
            ) : (
                
        
                <div className="event-gallery" key={event._id}>
                    <h2>{event.title}</h2>
                    <p>{event.date}</p>

                        <div className="photo-grid">
                            {event.photos?.map((photo) => (
                                <img
                                    key={photo._key}
                                    src={photo.url}
                                    alt={photo.alt || event.title}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    
                    {(!event.photos || event.photos.length === 0) && (
                        <p>No photos available for this event. <br></br> Check back soon!</p>
                        
                    )}
                </div>
            )}
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


