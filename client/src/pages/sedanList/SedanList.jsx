import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import useFetch from "../../hooks/useFetch";
import SearchItem from "../../components/searchItem/SearchItem";
import { useState, useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchContext } from "../../context/SearchContext";
import "./SedanList.css";


const SedanList = () => {

    const [destination, setDestination] = useState("");
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key :"selection"
        }
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);


    const { data, loading, error, reFetch } = useFetch(`/vehicles?experience=${"Sedan"}&city=${destination || "seattle" || "newYork"}&min=${min || 0}&max=${max || 500}`);

    useContext(SearchContext);



    const handleClick = () => {
        reFetch();
    };
    

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} onChange={e => setDestination(e.target.value)} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Trip Dates</label>
                            <span onClick={ () => setOpenDate(!openDate) }>
                                { `${format(dates[0].startDate, "MM/dd//yyyy")} 
                                    to ${format(dates[0].endDate, "MM/dd/yyyy")}` }
                            </span>
                            {openDate && (
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    minDate={new Date()}
                                    ranges={dates}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Min price<small> per day</small></span>
                                    <input type="number" min={ 0 } onChange={e => setMin(e.target.value)} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Max price<small> per day</small></span>
                                    <input type="number" min={ 0 } onChange={e => setMax(e.target.value)} className="lsOptionInput" />
                                </div>
                            </div>
                        </div>
                        <button className="lsButton" onClick={ handleClick }>Search</button>
                    </div>
                    <div className="listResult">
                        <h1 className="sedanVehicleTitle">Experience | Sedan</h1>
                        { loading ? "loading" 
                        : <>
                            {data.map(item => (
                            <SearchItem item={ item } key={ item._id } />
                            ))}
                        </> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SedanList;