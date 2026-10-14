import {useState, useEffect} from "react";

import {Link} from 'react-router';

export function NavBar(){
   
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/media">Media</Link>
            <Link to="/services">Services</Link>
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