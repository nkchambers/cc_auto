import Sedan_Honda_Civic from "../../assets/expType_img/Sedan_Honda_Civic.jpg";
import Van_Ford_Transit from '../../assets/expType_img/Van_Ford_Transit.jpg';
import Truck_Chevrolet_Colorado from "../../assets/expType_img/Truck_Chevrolet_Colorado.jpg";
import Suv_Bmw_X5 from "../../assets/expType_img/Suv_Bmw_X5.jpg";
import useFetch from "../../hooks/useFetch";
import "./ExpType.css";
import { Link } from "react-router-dom";

const ExpType = () => {

    const { data, loading, error } = useFetch("/vehicles/countByExp?experience=Sedan,Van,Truck,SUV");

    const images = [
        Sedan_Honda_Civic,
        Van_Ford_Transit,
        Truck_Chevrolet_Colorado,
        Suv_Bmw_X5
    ];


    return (
        <div className="expListContainer">
            <div className="expListTitle">
                <h1>Browse by Experience</h1>
            </div>

            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="expTypeContainer">
            
                        {data && images.map((img, i) => (
                            <Link to={ `/vehicles/${data[i]?.experience}` } key={i} style={{ color: "white", textDecoration: "none" }}>
                                <div className="expType" key={i}>
                                    <img src={ img } alt="" />
                                    <div className="expTitles">
                                        <h1>{ data[i]?.experience }</h1>
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

export default ExpType