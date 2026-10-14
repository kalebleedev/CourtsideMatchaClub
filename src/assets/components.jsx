import {useState, useEffect} from "react";

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
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
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
                    <input id="notes" name="notes" row="5" placeholder="Tell us about your event..." required/>
                </div>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}