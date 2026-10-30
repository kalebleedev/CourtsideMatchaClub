import { NavBar, VideoLoop, LoadingScreen } from "../assets/components"
import communityPic from "../assets/pics/grit-cycle.jpeg"
import catering from "../assets/pics/catering.JPG"
import introVid from "../assets/videos/matcha-cream.mp4";
import customization from "../assets/pics/customize.jpg"
import logo from "../assets/pics/Courtside Matcha Club Logo.png"
import { Link } from "react-router";
import { useState, useEffect } from "react";
import Contact from "./Contact";

export default function Home(){
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                let cancelled = false;
                async function waitForAssets(){
                        const images = Array.from(
                                document.querySelectorAll("img")
                        );

                        const imagePromises = images.map((img) => {
                                if(img.complete){
                                        return Promise.resolve();
                                }

                                return new Promise((resolve) => {
                                        img.addEventListener("load", resolve, {once: true});
                                        img.addEventListener("error", resolve, {once: true});
                                });
                        });

                        const videos = Array.from(
                                document.querySelectorAll("video")
                        );

                        const videoPromises = videos.map((video) => {
                                if(video.readyState >= 2){
                                        return Promise.resolve();
                                }

                                return new Promise((resolve) => {
                                        video.addEventListener("loadeddata", resolve, {once: true});
                                        video.addEventListener("error", resolve, {once: true});
                                });
                        });

                        const minimumDelay = new Promise((resolve) => {
                                setTimeout(resolve, 2000);
                        })

                        await Promise.all([...imagePromises, ...videoPromises, minimumDelay]);

                        if(!cancelled){
                                setLoading(false);
                        }
                }
                waitForAssets();

                return () => {
                        cancelled = true;
                };
        }, []);

    return (
    <>
    {loading && <LoadingScreen/>}
    <div className="page-structure" style={{visibility: loading ? "hidden" : "visible"}}>
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

          <div className="logo">
                <div className="logo-pic">
                        <VideoLoop
                            src={introVid}
                            className="intro-video"
                         />
                         <div className="video-overlay">
                                <div className="text">
                                        Welcome to the Club!
                                </div>
                                <div className="buttons">
                                    <Link to="/contact" className="book-now-btn">Book Now</Link>
                                    <Link to="/media" className="recent-events-btn">Recent Events</Link>
                                </div>
                        </div>
                         
                </div>

          </div>

          <div className="description">
                  <div className="introduction">
                        <div className="intro-left">
                            <img src={communityPic}/>
                        </div>
                        <div className="intro-right">
                            <h1>COMMUNITY, CULTURE, CREATIVITY</h1>
                            <p>A premium matcha experience inspired by community, culture, and creativity.
Built through passion and a love for bringing people together, Courtside Matcha Club has already served at multiple events and continues to grow through local pop-ups, social gatherings, sports communities, and private bookings.
                            We specialize in handcrafted matcha drinks, signature cream tops, and elevated café-style beverages served through a modern pop-up experience.</p>
                            <div className="buttons">
                                    <Link to="/contact" className="intro-book-now">Book Now</Link>
                                    <Link to="/media" className="intro-recent-events">Recent Events</Link>
                                </div>
                        </div>
                        
                  </div>

                  <div className="offer">
                        <div className="offer-left">
                            <h1>What We Offer</h1>
                            <p>From private parties and pop-ups to sports events, schools, and large social gatherings, Courtside Matcha Club brings a clean, stylish, and unforgettable experience to every event.</p>
                            <h1>What's Included</h1>
                            <p>All Inclusive Pricing: Ingredients, Labor, Setup + Breakdown, Travel within service area, Aesthetic signage, Exceptional service</p>
                            <p>Premium Ingredients: Ceremonial Grade Matcha, Lactose Free Whole Milk, Organic Sweeteners, Fresh Fruit Cream Tops, Quality Cups/Lids, Branded Signage</p>
                            <p>Fully insured with Certificate of Insurance and Food Safety Certification for safe, compliant, and professional service</p>
                  
                        </div>

                        <div className="offer-right">
                                <img src={catering}/>
                        </div>
                  </div>

                  <div className="additional">
                        <div className="additional-left">
                                <img src={customization}/>
                        </div>

                        <div className="additional-right">
                                <h1>Add Ons & Customization</h1>
                                <ul>
                                    <li>Custom Menu Design: Event Name, Company Logos, Custom Colors, Signature Drink Names, You name it, we'll do it</li>
                                    <li>Custom Stickers: Event Specific Logos</li>
                                    <li>Custom Signs: A-Frame Inserts, Event Posters (you keep it all afterwards!)</li>
                                    <li>Item Customizations: Oat/Almond Milk, Optional Flavor Requests</li>
                                    <li>We recommend booking at least two weeks in advance to ensure we have enough time to plan, customize, and create the perfect matcha experience with you.</li>
                                </ul>
                        </div>

                  </div>

                  <div className="packages">
                        <div className="packages-content">
                                <h1>Packages</h1>
                                <ul>
                                        <p>Tier 1: 20 Drink Package---$175</p>
                                        <li>Choice of TWO Signature Drinks</li>
                                        <br></br>
                                        <p>Tier 2: 20 Drink Package---$175</p>
                                        <li>Choice of TWO Signature Drinks</li>
                                        <br></br>
                                        <p>Tier 3: 20 Drink Package---$175</p>
                                        <li>Choice of TWO Signature Drinks</li>
                                        <br></br>
                                        <p>Tier 4: 20 Drink Package---$175</p>
                                        <li>Choice of TWO Signature Drinks</li>
                                        <br></br>

                                        <p>Signature Drinks</p>
                                        <li>Matcha Latte</li>
                                        <li>Strawberry Matcha Latte</li>
                                        <li>Lavender Matcha Latte</li>
                                        <li>Vanilla Matcha Latte</li>
                                        <li>Maple Cinnamon Matcha Latte</li>
                                        <li>Banana Matcha Latte (Housemade Cream Top)</li>
                                        <li>Double Matcha Latte (Housemade Cream Top)</li>
                                        <li>Yuzu Matcha Tonic</li>
                                        <li>Sparkling Matcha Lemonade</li>


                                </ul>
                        </div>

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
    </div>
    </>
    )}
