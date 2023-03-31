// IMPORT BROWSER ROUTER & ROUTES
import {
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import SedanList from "./pages/sedanList/SedanList";
import VanList from "./pages/vanList/VanList";
import TruckList from "./pages/truckList/TruckList";
import SuvList from "./pages/suvList/SuvList";
import SeattleList from "./pages/seattleList/SeattleList";
import NewYorkList from "./pages/newYorkList/NewYorkList";
import Vehicle from "./pages/vehicle/Vehicle";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";


// EXPORT APP FUNCTION
function App() {

  //Psudo user
  //const user = false;
  
  const { user } = useContext(AuthContext);


  return (

      <BrowserRouter>
        <Routes>
          <Route path = "/vehicles/Sedan" element={ <SedanList /> } />
          <Route path = "/vehicles/Van" element={ <VanList /> } />
          <Route path = "/vehicles/Truck" element={ <TruckList /> } />
          <Route path = "/vehicles/SUV" element={ <SuvList /> } />
          <Route path = "/vehicles/Seattle, WA" element={ <SeattleList /> } />
        {/* 
          <Route path = "/vehicles/New York, NY" element={ <NewYorkList /> } /> 
        */}
          <Route path = "/vehicles/:id" element={ <Vehicle /> } />
          <Route path = "/vehicles" element={ <List /> } />
          <Route path = "/login" element={ <Login /> } />
          <Route path = "/register" element={ <Register /> } />
          <Route path = "/contact" element={ <Contact /> } /> 
          <Route exact path = "/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
