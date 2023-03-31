import { faCarRear, faWifi, faUnlock, fa2, fa1, faPlus, faBolt, faGauge, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faBluetooth, faUsb } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img 
                src={ item.images[0] } 
                alt="" 
                className="siImg" 
            />
            <div className="siTitle">
                <h1 className="siYear">{ item.year }</h1>
                <h1 className="siMake">{ item.make }</h1>
                <h1 className="siModel">{ item.model }</h1>
            </div>

            <hr />

            <div className="siDetails">
                <span className="siPrice">Starting at ${ item.dailyMinPrice } / Day</span>
                <Link to={ `/vehicles/${item._id}` }>
                    <button className="siViewButton">View</button>
                </Link>
            </div>

            <hr />

            <h1 className="siEssentialsTitle">Essentials</h1>
            <div className="siFeatureContainer">
                <div className="FeatureIcons"> 
                    <FontAwesomeIcon icon={ fa2 } />
                    <FontAwesomeIcon icon={ fa1 } />
                    <FontAwesomeIcon icon={ faPlus } />
                    <p>{ item.features[0] }</p>
                </div>
                <div className="FeatureIcons"> 
                    <FontAwesomeIcon icon={ faPlus } 
                        style={{ 
                            border: "1px solid whitesmoke", 
                            paddingTop: "1px", 
                            paddingBottom: "5px", 
                            paddingLeft: "1px", 
                            paddingRight: "1px" 
                        }} 
                    />
                    <p>{ item.features[1] }</p>
                </div>
                <div className="FeatureIcons"> 
                    <FontAwesomeIcon icon={ faUsb } />
                    <FontAwesomeIcon icon={ faBolt } />
                    <p>{ item.features[2] }</p>
                </div>
                <div className="FeatureIcons">
                    <FontAwesomeIcon icon={ faBluetooth } />
                    <p>{ item.features[3] }</p>
                </div>
                <div className="FeatureIcons">
                    <FontAwesomeIcon icon={ faUnlock } />
                    <p>{ item.features[4] }</p>
                </div>
                <div className="FeatureIcons">
                    <FontAwesomeIcon icon={ faCalendarCheck } />
                    <p>{ item.features[5] }</p>
                </div>
                <div className="FeatureIcons">
                    <div className="backupCamera">
                        <span><FontAwesomeIcon icon={ faCarRear } /></span>
                        <span className="faIconWifi"><FontAwesomeIcon icon={ faWifi } /></span>
                    </div>
                    <p>{ item.features[6] }</p>
                </div>
            </div>
            <h2 className="siNiceToHaveTitle">Nice to Have</h2>
            <div className="siNiceToHave">
                <div className="FeatureIcons"> 
                    <FontAwesomeIcon icon={ faGauge } />
                    <p>{ item.niceToHave1 }</p>
                </div>
                <div className="FeatureIcons"> 
                    <FontAwesomeIcon icon={ faGauge } />
                    <p>{ item.niceToHave2 }</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;