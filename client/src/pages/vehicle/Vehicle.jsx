import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluetooth, faUsb } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, 
        faGasPump, 
        faSdCard, 
        faUsers, 
        faDollarSign, 
        faThumbsUp, 
        faRoad,
        faUmbrella, 
        faCarRear, 
        faWifi, 
        faUnlock,
        faCarSide,
        faTruckPickup,
        faMotorcycle,
        faVanShuttle,
        faArrowLeftLong,
        faArrowRightLong,
        faXmark,
        fa1,
        fa2,
        faPlus,
        faBolt,
        faGauge,
        faLocationDot,
        faCalendarCheck
                        } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import Reserve from "../../components/reserve/Reserve";
import "./Vehicle.css";
                    
                    
const Vehicle = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const [openModel, setOpenModel] = useState(false);

    const { data, loading, error } = useFetch(`/vehicles/${id}`);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { dates } = useContext(SearchContext);

{/*
    const MILLESECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLESECONDS_PER_DAY);
        return diffDays;
    }
    //console.log(dayDifference(dates[0].startDate, dates[0].endDate));
    const days = dayDifference(dates[0].startDate, dates[0].endDate);
*/}


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "left") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };


    const handleClick = () => {
        if(user) {
            setOpenModel(true);
        }
        else {
            navigate("/login")
        }
    }



    return (
        <div>
            <Navbar />
            <Header  type="list" />

            {loading ? (
                "loading"
            ) : (
                <div className="vehicleContainer">
                {open && 
                    <div className="slider">
                        <FontAwesomeIcon icon={ faXmark } className="close" onClick={ () => setOpen(false) } />
                        <FontAwesomeIcon icon={ faArrowLeftLong } className="arrow" onClick={ () => handleMove("left") } />
                        <div className="sliderWrapper">
                            <img src={ data.images[slideNumber] } alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={ faArrowRightLong } className="arrow" onClick={ () => handleMove("right") } />
                    </div>
                }
                <div className="vehicleWrapper">
                    <div className="vehicleImages">
                        {data.images?.map((img, i) => (
                            <div className="vehicleImgWrapper">
                                <img  
                                    onClick={ () => handleOpen(i) } 
                                    src={ img } 
                                    alt="" 
                                    className="vehicleImg" 
                                />
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="vehicleHeaderInfo">
                        <div className="vehicleTitle">
                            <h1 className="vehicleYear">{ data.year }</h1>
                            <h1 className="vehicleMake">{ data.make }</h1>
                            <h1 className="vehicleModel">{ data.model }</h1>
                        </div>
                        <div className="bookOnTuro">
                            <a href={ data.turoListing }
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <span><FontAwesomeIcon className="faIcons" icon={ faCalendarDays } /></span>
                                <button onClick={ handleClick }>Check Availability / Book via Turo</button>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="vehicleTopInfo">  
                        <div className="basicFeatures">
                            <div className="leftCol">
                                <div className="econFeature">
                                    <span><FontAwesomeIcon className="faIcons" icon={ faLeaf } /></span>
                                    <p>Avg { data.avgMPG } MPG</p>
                                </div>
                                <div className="numDoors">
                                    <span><FontAwesomeIcon className="faDoorIcon" icon={ faSdCard } /></span>
                                    <p>{ data.doors } Doors</p>
                                </div>
                            </div>
                            <div className="rightCol">
                                <div className="gasType">
                                    <span><FontAwesomeIcon className="faIcons" icon={ faGasPump } /></span>
                                    <p>Gas ({ data.gas })</p>
                                </div>
                                <div className="numSeats">
                                    <span><FontAwesomeIcon className="faIcons" icon={ faUsers } /></span>
                                    <p>{ data.seats } Seats</p>
                                </div>
                            </div>
                        </div>
                        <div className="priceRange">
                            <div className="priceTitle">
                                <span><FontAwesomeIcon className="faIcons" icon={ faDollarSign } /></span>
                                <h2>Daily Price Range</h2>
                                <p>${ data.dailyMinPrice }-{ data.dailyMaxPrice } / Day</p>
                            </div>
                            <p>(Average daily price fluctuates based on demand)</p>
                            <div className="avgPrices">
                                <p>(Avg ${ data.winterMinAvg }-{ data.winterMaxAvg }) .................. October - March</p>
                                <p>(Avg ${ data.summerMinAvg }-{ data.summerMaxAvg }) .................. April - September</p>
                                <p>(Avg ${ data.holidayMinAvg }-{ data.holidayMaxAvg }+) ..................... Holidays</p>
                            </div>
                        </div>
                    </div>
                    <div className="vehicleMiddleInfo">
                        <div className="vehicleDesc">
                            <h2>Description</h2>
                            <p>{ data.description }</p> 
                        </div>
                        <div className="vehicleBenefits">
                            <div className="cancellation">
                                <span className="faIcons"><FontAwesomeIcon icon={ faThumbsUp } /></span>
                                <p>Free Cancellation</p>
                            </div>
                            <div className="distanceIncluded">
                                <div className="distanceTop">
                                    <span className="faIcons"><FontAwesomeIcon icon={ faRoad } /></span>
                                    <p>Distance Included</p>
                                </div>
                                <div className="listItems">
                                    <p className="benefitItems">- 250 Miles / Day</p>
                                    <p className="benefitItems">- Daily price/daily distance included = additional distance fee/mile</p>
                                </div>
                            </div>
                            <div className="insuranceCoverage">
                                <div className="insuranceTop">
                                    <span className="faIcons"><FontAwesomeIcon icon={ faUmbrella } /></span>
                                    <p>Insurance Coverage</p>
                                </div>
                                <div className="listItems">
                                    <p className="benefitItems">- Insurance provided via Travelers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vehicleBottomInfo">
                        <h2 className="vehicleFTitle">Essential Features</h2>
                        <div className="vehicleFContainer">
                            <div className="vehicleFIcons"> 
                                <FontAwesomeIcon className="faIcons" icon={ fa2 } />
                                <FontAwesomeIcon className="faIcons" icon={ fa1 } />
                                <FontAwesomeIcon className="faIcons" icon={ faPlus } />
                                <p>Must be 21+ to book</p>
                            </div>
                            <div className="vehicleFIcons"> 
                                <FontAwesomeIcon className="faIcons" icon={ faPlus }
                                    style={{ 
                                        border: "1px solid whitesmoke", 
                                        paddingTop: "1px", 
                                        paddingBottom: "5px", 
                                        paddingLeft: "1px", 
                                        paddingRight: "1px" 
                                    }} 
                                />
                                <p>Automatic Transmission</p>
                            </div>
                            <div className="vehicleFIcons"> 
                                <FontAwesomeIcon className="faIcons" icon={ faUsb } />
                                <FontAwesomeIcon className="faIcons" icon={ faBolt } />
                                <p>USB Charger/Input</p>
                            </div>
                            <div className="vehicleFIcons">
                                <FontAwesomeIcon className="faIcons" icon={ faBluetooth } />
                                <p>Bluetooth</p>
                            </div>
                            <div className="vehicleFIcons">
                                <FontAwesomeIcon className="faIcons" icon={ faUnlock } />
                                <p>Keyless Entry</p>
                            </div>
                            <div className="vehicleFIcons">
                                <FontAwesomeIcon className="faIcons" icon={ faCalendarCheck } />
                                <p>Long-term Car</p>
                            </div>
                            <div className="vehicleFIcons">
                                <div className="vehicleBackupCamera">
                                    <span><FontAwesomeIcon className="faIcons" icon={ faCarRear } /></span>
                                    <span className="vehicleIconWifi"><FontAwesomeIcon className="faIcons" icon={ faWifi } /></span>
                                </div>
                                <p>Backup Camera</p>
                            </div>
                        {/*
                            <div className="vehicleFIcons">
                            <FontAwesomeIcon className="faIcons" icon={ faAndroid } />
                            <p>Android Auto</p>
                            </div>
                            <div className="vehicleFIcons">
                            <FontAwesomeIcon className="faIcons" icon={ faCirclePlay } />
                            <p>Apple Carplay</p>
                            </div>
                        */}
                        </div>
                        <h2 className="niceToHaveTitle">Nice to Have Features</h2>
                        <div className="niceToHaveContainer">
                            <div className="niceToHaveIcons"> 
                                <FontAwesomeIcon className="faIcons" icon={ faGauge } />
                                <p>{ data.niceToHave1 }</p>
                            </div>
                            <div className="niceToHaveIcons"> 
                                <FontAwesomeIcon className="faIcons" icon={ faGauge } />
                                <p>{ data.niceToHave2 }</p>
                            </div>
                        </div>
                        <div className="pickupReturn">
                            <div className="homeLocation">
                                <span><FontAwesomeIcon className="faIcons" icon={ faLocationDot } /></span>
                                <h3>Pickup / Return Location</h3>
                            </div>
                            <p>- {data.mapLocation}</p>
                            <iframe
                                className="mapLocation"
                                title="Map"
                                loading="lazy" 
                                allowFullScreen src={ data.mapImage }>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="bookOnTuroBottom">
                    <div className="bookOnTuroTitles">
                    <h1>Book and Drive Today!</h1>
                    {/*
                        <h1>Perfect for a {3 day getaway!</h1>
                        <h1>
                            <b>${days * data.dailyMinPrice}</b> {" "} 
                            ({days} {" "} days)
                        </h1>
                    */}
                    </div>
                    <a href={ data.turoListing }
                        target="_blank" 
                        rel="noreferrer"
                    >   
                        <span><FontAwesomeIcon className="faIcons" icon={ faCalendarDays } /></span>
                        <button onClick={ handleClick }>Check Availability / Book via Turo</button>
                    </a>
                </div>
                <div className="roadFooter">
                    <div className="roadLineContainer">
                        <div className="topIcons">
                            <span className="faIcons"><FontAwesomeIcon icon={ faMotorcycle } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faVanShuttle } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faCarSide } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faTruckPickup } /></span>
                        </div>
                        <div className="roadLines">
                            <p className="line"></p>
                            <p className="line"></p>
                            <p className="line"></p>
                            <p className="line"></p>
                            <p className="line"></p>
                            <p className="line"></p>
                            <p className="line"></p>
                        </div>
                        <div className="bottomIcons">
                            <span className="faIcons"><FontAwesomeIcon icon={ faCarSide } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faTruckPickup } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faVanShuttle } /></span>
                            <span className="faIcons"><FontAwesomeIcon icon={ faMotorcycle } /></span>
                        </div>
                    </div>
                </div>
            </div>
            )}

        {/* Reserve Component - Add later
            { openModel && <Reserve setOpen={ setOpenModel } vehicleId={ id } key={id} /> }
        */}
        
        </div>
    )
}

export default Vehicle;