import {useState, useEffect} from "react";
import { sanityClient } from "../libs/sanity";

import {Link} from 'react-router';

export function NavBar(){
   
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/media">Media</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export function VideoLoop({src, className=""}){
    return(
        <video className={className} autoPlay loop muted playsInline>
                <source src={src} type="video/mp4"/>Your Browser does not support this video. 
        </video>
    )
}

export function EventForm(){
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

       
        setLoading(true);
        setStatus("");

        try {
            const response = await fetch(
                "https://formspree.io/f/xaeeogdl",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok){
                setStatus("Your event request was submitted!");
                form.reset();
            } else {
                setStatus("Submission failed. Please try again.");
            }
        } catch (error){
            console.log("Form submission error: ", error);
            setStatus("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return(
        <form className="event-form" onSubmit={handleSubmit}>
            <h1>Book Your Event!</h1>
            <p>Let us bring matcha to your next event!</p>
            
            <div className="form-row">
                <div className="form-group">
                    <input type="text" id="fname" name="fname" placeholder="First Name" required/>
                </div>
                <div className="form-group">
                    <input type="text" id="lname" name="lname" placeholder="Last Name"required/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input type="date" id="event-date" name="eventDate" placeholder="Event Date" required/>
                </div>
                <div className="form-group">
                    <input type="number" id="guest-num" name="guestNum" min="1" placeholder="Number of Guests" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input type="time" id="start-time" name="startTime" placeholder="Start Time" required/>
                </div>
                <div className="form-group">
                    <input type="number" id="duration" name="duration" min="1" step="0.5" placeholder="Event Duration" required/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <input type="text" id="address" name="address" placeholder="Event Location" required/>
                </div>
                <div className="form-group">
                    <textarea id="notes" name="notes" rows="5" placeholder="Tell us about your event..." required/>
                </div>
            </div>

            <button type="submit" className="submit-btn" disabled ={loading}>{loading ? "Submitting" : "Submit"}</button>
            {status && <p className="form-status">{status}</p>}
        </form>
    )
}

export function InstagramFeed({widgetId}){
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

    // widget id = b6b3819f-d258-4d56-bf89-686037604028
    return (
        <section className="instagram-section">
            <h2>Follow our events!</h2>
            <div key={widgetId} className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy/>
        </section>
    )
}

export function RecentEvents(){
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvents(){
            try{
                const query = `
                    *[_type == "Event"] | order(date desc) {
                        _id,
                        _type,
                        title,
                        date,
                        description,
                        "imageUrl": image.asset->url
                    }
`;

                const data = await sanityClient.fetch(query);
                setEvents(data);
            } catch (err) {
                console.error("Error fetching events:", err);
                setError("Unable to load recent events");
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    if(loading){
        return <p>Loading Events....</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        <section className="recent-events">
            <div className="events-grid">
                <h1>Recent Events</h1>
                    {events.map((event) => (
                    <div className="event-wrapper" key={event._id}>
                        <div className="event-card" >
                                <div className="event-info">
                                    <h2>{event.title}</h2>
                                    <p>{event.date}</p>
                                    <p>{event.description}</p>
                                </div>
                        </div>
                        {event.imageUrl && (
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="event-image"
                                        />
                                )}
                        </div>
                    ))}
            </div>

            {events.length === 0 && (
                <p>No events have been published yet.</p>
            )}
        </section>
    )
}