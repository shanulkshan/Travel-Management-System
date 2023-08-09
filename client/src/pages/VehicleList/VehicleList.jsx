import "./vehicleList.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import { fetchFilterdVehicleData } from "../../useEffects/fetchFilterdVehicleData";

const VehicleList = () => {
  const location = useLocation();
  const [selectedCountry] = useState(location.state.selectedCountry);
  const [selectedCity] = useState(location.state.selectedCity);
  const [selecteDateRange, setSelecteDateRange] = useState(location.state.date);
  const [min] = useState(undefined);
  const [max] = useState(undefined);
  const [vehicleDataList, setVehicleDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetchFilterdVehicleData(
      selectedCountry,
      selectedCity,
      min,
      max
    );

    setVehicleDataList(result);
  };

  const getDateRange = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate = new Date(currentDate.getTime() + 86400000); // add one day (in milliseconds)
    }

    return dates;
  };

  const RenderAvailableVehicles = () => {
    const availableVehicles = [];
    const dateRange = getDateRange(
      selecteDateRange[0].startDate,
      selecteDateRange[0].endDate
    );

    for (const vehicle of vehicleDataList) {
      let reservationFound = false;

      for (const date of dateRange) {
        if (
          vehicle.reservationDetails &&
          vehicle.reservationDetails.length > 0
        ) {
          for (const reservation of vehicle.reservationDetails) {
            if (
              reservation.reservationNumbers &&
              reservation.reservationNumbers.length > 0
            ) {
              for (const reservationNumb of reservation.reservationNumbers) {
                for (const reservationItem of reservationNumb.unavailableDates) {
                  if (
                    reservationItem.slice(0, 10) ===
                    date.toISOString().slice(0, 10)
                  ) {
                    reservationFound = true;

                    break;
                  }
                }
              }
            }

            if (reservationFound) break;
          }
        }

        if (reservationFound) break;
      }

      if (!reservationFound) availableVehicles.push(vehicle);
    }

    return availableVehicles.map((vehicle) => {
      return (
        <SearchItem
          item={vehicle}
          key={vehicle._id}
          startAndEndDate={selecteDateRange}
          dateRange={dateRange}
        />
      );
    });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" activePage="travel" />
      <SearchBar
        setVehicleDataList={setVehicleDataList}
        selectedCountryData={selectedCountry}
        selectedCityData={selectedCity}
        selecteDateRange={selecteDateRange}
        setSelecteDateRange={setSelecteDateRange}
        filterPage={true}
      />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {vehicleDataList && vehicleDataList.length > 0 && (
              <RenderAvailableVehicles />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleList;
