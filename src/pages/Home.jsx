import { NavBar, VideoLoop } from "../assets/components"
import communityPic from "../assets/pics/grit-cycle.jpeg"
import catering from "../assets/pics/catering.JPG"
import introVid from "../assets/videos/matcha-pour.mp4";

export default function Home(){
    return (
    <>
    <div className="page-structure">
          <div className="header">
                <div className="header-left">
                      <p>Courtside Matcha Club</p>
                </div>
                
                <div className="navigation">
                    <NavBar />
                </div>

                <div className="header-right">
                        <p>Book Now</p>
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
                                    <button>Book Now</button>
                                    <button>Recent Events</button>
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
                                    <button>Book Now</button>
                                    <button>Recent Events</button>
                                </div>
                        </div>
                        
                  </div>

                  <div className="offer">
                        <div className="offer-left">
                            <p>What We Offer</p>
                            <p>From private parties and pop-ups to sports events, schools, and large social gatherings, Courtside Matcha Club brings a clean, stylish, and unforgettable experience to every event.</p>
                            <p>What's included</p>
                            <p>All Inclusive Pricing: Ingredients, Labor, Setup + Breakdown, Travel within service area, Aesthetic signage, Exceptional service</p>
                            <p>Premium Ingredients: Ceremonial Grade Matcha, Lactose Free Whole Milk, Organic Sweeteners, Fresh Fruit Cream Tops, Quality Cups/Lids, Branded Signage</p>
                            <p>Fully insured with Certificate of Insurance and Food Safety Certification for safe, compliant, and professional service</p>
                  
                        </div>

                        <div className="offer-right">
                                <img src={catering}/>
                        </div>
                        
                  </div>

                  
                        
                  

                  <div className="add-ons-customization">
                    
                  </div>

                  <div className="picture-gallery">

                  </div>

                  <div className="packages">

                  </div>

                  

          </div>
    </div>
    </>
    )}
