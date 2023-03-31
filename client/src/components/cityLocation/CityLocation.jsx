import Seattle from "../../assets/cityLocation_img/Seattle.jpeg";
import NewYork from "../../assets/cityLocation_img/NewYork.jpeg";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./CityLocation.css";

const CityLocation = () => {

    const { data, loading, error } = useFetch("/vehicles/countByCity?city=seattle,newYork");

    const images = [
        Seattle,
        //NewYork
    ];


    return (
        <div className="locationContainer">
            <div className="locationTitle">
                <h1>Browse by Location</h1>
            </div>
            
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="cityContainer">
            
                        {data && images.map((img, i) => (
                            <Link to={ `/vehicles/${data[i]?.city}` } key={i} style={{color: "white", textDecoration: "none" }}>
                                <div className="cityLocation" key={i}>
                                    <img src={ img } alt="" />
                                    <div className="cityTitles"> 
                                        <h1>{ data[i]?.city }</h1>
                                        <h2>{ data[i]?.count } Vehicle(s)</h2>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default CityLocation;