import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import CityLocation from "../../components/cityLocation/CityLocation";
import ExpType from "../../components/expType/ExpType";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import LightsHome1 from "../../assets/home_img/LightsHome1.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
        faCarSide, 
        faTruckPickup, 
        faVanShuttle, 
        faMotorcycle, 
        faTruck, 
        fa1, 
        fa2, 
        fa3, 
        fa4, 
        faTableList, 
        faEye   
                        } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays, 
        faCalendarCheck 
                        } from "@fortawesome/free-regular-svg-icons";
import "./Home.css";


const Home = () => {
    return (
        <div>
            <Navbar />
        
            <Header />
        
            
            
                <div className="homeWrapper">
                    <div className="homeHeaderImg">
                        <img src= { LightsHome1 } alt="car with active headlights" />
                    </div>
                {/*
                    <div className="seeLogo">
                        <h1>Look for the C&C Logo in the Windshield!</h1>
                    </div>
                */}
                
                <ExpType />

                    <div className="howItWorks">
                        <div className="topIcons">
                            <span className="faIcons"><FontAwesomeIcon icon={ faTruck } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faCarSide } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faTruckPickup } /></span>
                        </div>
                        <div className="howItWorksTitle">
                            <h1>How</h1>
                            <div className="brandLogo">
                                <div className="ChambersChung">C</div>
                                <span id="brandChar">&amp;</span>
                                <div className="ChambersChung">C</div>
                            </div>
                            <h1>works</h1>
                            <div className="roadLines">
                                <p className="line"></p>
                                <p className="line"></p>
                                <p className="line"></p>
                                <p className="line"></p>
                                <p className="line"></p>
                            </div>
                        </div>
                        <div className="bottomIcons">
                            <span className="faIcons"><FontAwesomeIcon icon={ faMotorcycle } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faVanShuttle } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faCarSide } /></span>
                        </div>
                        <div className="howItWorksDesc">
                            <div className="stepDesc">
                                <span className="numIcons"><FontAwesomeIcon icon={ fa1 } /></span>
                                <p>Browse Rental Vehicles</p>
                                <span className="stepDescIcons"><FontAwesomeIcon icon={ faTableList } /></span>
                            </div>
                            <div className="stepDesc">
                                <span className="numIcons"><FontAwesomeIcon icon={ fa2 } /></span>
                                <p>Select View for Vehicle Details & Rental Info</p>
                                <span className="stepDescIcons"><FontAwesomeIcon icon={ faEye } /></span>
                            </div>
                            <div className="stepDesc">
                                <span className="numIcons"><FontAwesomeIcon icon={ fa3 } /></span>
                                <p> Select Check Availability / Book to Open Vehicle Turo Listing in New Tab & View Available Rental Times</p>
                                <span className="stepDescIcons"><FontAwesomeIcon icon={ faCalendarDays } /></span>
                            </div>
                            <div className="stepDesc">
                                <span className="numIcons"><FontAwesomeIcon icon={ fa4 } /></span>
                                <p>Book Vehicle Rental via Turo & Drive</p>
                                <span className="stepDescIcons"><FontAwesomeIcon icon={ faCalendarCheck } /></span>
                            </div>
                        </div>
                    </div>
                </div>
        
            
        {/* 
            <MailList />
        */}
            <CityLocation />
            <Footer />
        </div>
    )
}

export default Home