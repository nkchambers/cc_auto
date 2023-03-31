import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./Reserve.css";

const Reserve = ({ setOpen, vehicleId }) => {

    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const { data, loading, error } = useFetch(`/vehicles/find/${vehicleId}`);
    const { dates } = useContext(SearchContext);


    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        const date = new Date(start.getTime());

        const dates = [];

        while(date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    console.log(getDatesInRange(dates[0].startDate, dates[0].endDate));
    //const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);



/*
    const isAvailable = (vehicleId) => {
        const isFound = vehicleId.unavailableDates.some((date) =>
            allDates.includes(new Date(date).getTime())
        );

        return !isFound;
    };
*/


    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedVehicle(
            checked 
            ? [...selectedVehicle, value] 
            : selectedVehicle.filter((vehicleId) => vehicleId !== value)
        );
    };

    console.log(selectedVehicle);


    const handleClick = () => {

    };


    return (
        <div className="reserve">
                <div className="rContainer">
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        className="rClose"
                        onClick={ () => setOpen(false) }
                    />
                <span>Vehicle Reservation</span>
                {data &&
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">
                                <div className="leftTitle">
                                    <h2 className="rItemYear">{ data.year }</h2>
                                    <h2 className="rItemMake">{ data.make }</h2>
                                    <h2 className="rItemModel">{ data.model }</h2>
                                </div>
                                <div className="rightTitle">
                                    <h2 className="rPrice">${ data.dailyMinPrice } / Day</h2>
                                </div>
                            </div>
                            <div className="rbody" style={{ fontSize: "20px" }}>
                                <div className="rGasType"><strong>REMINDER</strong> - Gas Type ({ data.gas })</div>
                                <div className="rDesc"><strong>Description:</strong> { data.description }</div>
                                <div className="rMpgSeats">
                                    <div className="rAvgMPG"><strong>Avg MPG:</strong> { data.avgMPG }</div>
                                    <div className="rSeats"><strong>Seats:</strong> { data.seats }</div>
                                </div>
                                <div className="rExp"><strong>Experience:</strong> { data.experience }</div>
                            </div>
                            <label>Check box to reserve vehicle</label>
                            <input 
                                type="checkbox" 
                                value={ vehicleId } 
                                onChange={ handleSelect }
                                //disabled={ !isAvailable(vehicleId) } 
                            />
                        </div>
                    </div>
                }
                <button onClick={ handleClick } className="rButton">Book Now!</button>
            </div>
        </div>
    );
};

export default Reserve;