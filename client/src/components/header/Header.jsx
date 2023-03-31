import { 
        faCarSide, 
        faTruckPickup, 
        faVanShuttle, 
        faMotorcycle, 
        faCalendarDay, 
        faMapLocationDot 
                        } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import { useState, useContext } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file 
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";


const Header = ({ type }) => {
    
    const [destination, setDestination] = useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);


    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type:"NEW_SEARCH", payload:{ destination, dates } });
        navigate("/vehicles", { state: { destination, dates } });
    };

    return (
        <div className="header">
            {<div className={ type === "list" ? "headerContainer listMode" : "headerContainer" }>
                <div className="headerList">
                    <div className="headerListItem">
                        <span className="faIcons">
                            <FontAwesomeIcon icon={ faCarSide } />
                        </span>
                    </div>
                    <div className="headerListItem">
                        <span className="faIcons">
                            <FontAwesomeIcon icon={ faTruckPickup } />
                        </span>
                    </div>
                    <div className="headerListItem">
                        <span className="faIcons">
                            <FontAwesomeIcon icon={ faMotorcycle } />
                        </span>
                    </div>
                    <div className="headerListItem">
                        <span className="faIcons">
                            <FontAwesomeIcon icon={ faVanShuttle } />
                        </span>
                    </div>
                    <div className="headerListItem">
                        <span className="faIcons">
                            <FontAwesomeIcon icon={ faCarSide } />
                        </span>
                    </div>
                </div>

                { 
                    type !== "list" &&
                        <>
                        {/*
                            <h1 className="headerTitle">Drive More, Save more</h1>
                            <div className="headerSignUp">
                                <p className="headerDesc">
                                    Get rewarded for your driving - 
                                    receive instant savings of 10% or 
                                    more with a free C&C Auto account
                                </p>
                                {!user && <button className="headerBtn">Sign in / Register</button>}
                            </div>
                        */}
                            
                            <div className="headerSearch">
                                <div className="headerSearchItem">
                                    <span className="faIcons">
                                        <FontAwesomeIcon icon={ faMapLocationDot } />
                                    </span>
                                        <input 
                                            type="text" 
                                            placeholder="Where are you going?" 
                                            className="headerSearchInput"
                                            onChange={e => setDestination(e.target.value)}
                                        />
                                </div>
                                <div className="headerSearchItem">
                                    <span className="faIcons">
                                        <FontAwesomeIcon icon={ faCalendarDay } />
                                    </span>
                                    <span onClick={ () => setOpenDate(!openDate) } className="headerSearchText">
                                        {`${format(dates[0].startDate, "MM/dd//yyyy")} 
                                            to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                                    </span>
                                    {openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className="calendar"
                                        minDate={new Date()}
                                    />}
                                </div>
                                {/* <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={ faCarSide } className="headerIcon"/>
                                    <span className="headerSearchText">2 adults 2 children 1 room</span>
                                </div> */}
                                <div className="headerSearchItem">
                                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </>
                    }
            </div>
            } 
    </div>
    )
}

export default Header