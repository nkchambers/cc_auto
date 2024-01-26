import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./List.css";

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(`/vehicles?city=${destination}&min=${min || 0}&max=${max || 999}`);

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
                                    onChange={item => setDates([item.selection])} 
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
                        <h1 className="allVehicleTitle">All Vehicles</h1>
                        { loading ? "loading" : <>
                            {data.map(item => (
                                <SearchItem item={ item } key={ item._id } />
                            ))}
                        </> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List