import logo from "../assets/pics/Courtside Matcha Club Logo.png";
import { NavBar } from "../assets/components";

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
                            <button>Book Now</button>
                    </div>
            </div>

        </div>
    )
}

