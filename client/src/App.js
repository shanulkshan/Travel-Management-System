//All
import AboutUs from "./pages/aboutUs/AboutUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleList from "./pages/VehicleList/VehicleList";
import VehicleHome from "./pages/VehicleHome/VehicleHome";
import Vehicle from "./pages/vehicle/Vehicle";
import AddVehicle from "./pages/addVehicle/AddVehicle";
import ChangeVehicle from "./pages/changeVehicle/ChangeVehicle";
import { Confirmation } from "./pages/confirmation/Confirmation";

//events
import AllBookingsSportPackages from './pages/events/SportBookings';
import Sportevents from './pages/events/SportEvents';
import Cultevents from './pages/events/CultureEvents';
import ENTERTAINMENTEVENTS from './pages/events/EntertaitmentEvent';
import SportEventViews from './pages/events/SportEventViews';
import SportEventBookings from './pages/events/EventBooking';
import EventHome from './pages/events/HomepageCard';
import AddEvent from './pages/events/EventAdd';
import EditEvents from './pages/events/EditEvent';
import AllEvent from './pages/events/AllEventsAdmin';

//restaurant
import HomeRestaurant from "./components/Home_Restaurant/Home_Restaurant";
import AddRestaurant from "./components/AddRestaurant/AddRestaurant";
import EditRestaurant from "./components/EditRestaurant/EditRestaurant";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import RestaurantHome from "./pages/RestaurantHome/RestaurantHome.js"
import ReservationForm from "./components/RestaurantRes/RestaurantRes"

//hotel
import HotelHome from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import AddHotel from "./pages/addHotel/AddHotel";
import ChangeHotel from "./pages/changeHotel/ChangeHotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //About Us
        <Route path="/aboutUs" element={<AboutUs />} />

        //hotel
        <Route path="/" element={<HotelHome/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/addHotel" element={<AddHotel/>}/>
        <Route path="/changeHotel" element={<ChangeHotel/>}/>

        //travel
        <Route path="/vehicleHome" element={<VehicleHome />} />
        <Route path="/vehicleList" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/changeVehicle" element={<ChangeVehicle />} />
        <Route path="/confirmation" element={<Confirmation />} />
        
        //reastaurant
        <Route path="/RestaurantHome" element={<RestaurantHome />} />
        <Route path="/homeRestaurant" element={<HomeRestaurant />} />
        <Route path="/addRestaurant" element={<AddRestaurant />} />
        <Route path="/edit/:id" element={<EditRestaurant />} />
        <Route path="/post/:id" element={<RestaurantDetails />} />
        <Route path="/RestaurantRes" element={<ReservationForm />} />

        //events
        <Route exact path="/eventhome" element={<EventHome />} />
        <Route exact path="/allbookings" element={<AllBookingsSportPackages />} />
        <Route exact path="/Sportpackag" element={<Sportevents />} />
        <Route exact path="/cultpackag" element={<Cultevents />} />
        <Route exact path="/enterpackag" element={<ENTERTAINMENTEVENTS />} />
        <Route exact path="/sporteventsview/:id" element={<SportEventViews />} />
        <Route exact path="/event-booking/:id/:eventid" element={<SportEventBookings />} />
        <Route exact path="/eventadd" element={<AddEvent />} />
        <Route exact path="/eventedit/:id" element={<EditEvents />} />
        <Route exact path="/admin-event" element={<AllEvent />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
