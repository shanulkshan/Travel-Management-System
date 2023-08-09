import axios from "axios";

export const fetchFilterdVehicleData = async (
  selectedCountry,
  selectedCity,
  min,
  max
) => {
  try {
    const vehicleList = await axios.get(
      `/api/vehicles?location=${selectedCountry}&city=${selectedCity}&min=${
        min || 0
      }&max=${max || 999}`
    );

    if (vehicleList?.data) {
      const vehicleDataList = [];

      for (const vehicle of vehicleList.data) {
        const newVehicle = { ...vehicle, reservationDetails: [] };

        for (const reservationNumb of vehicle.reservations) {
          const reservation = await fetchReservationData(reservationNumb);

          if (reservation.data)
            newVehicle.reservationDetails.push(reservation.data);
        }

        vehicleDataList.push(newVehicle);
      }

      return vehicleDataList;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchReservationData = async (vehicleId) => {
  const reservation = await axios.get(`/api/reservations/${vehicleId}`);

  return reservation;
};
