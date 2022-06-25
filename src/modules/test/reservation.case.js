const reservationList = [];
const createReservation = async (index, username, startDate, endDate) => {
  const reservation = {
    item_id: index,
    username,
    date_start: startDate,
    date_end: endDate,
  };
  reservationList.push(reservation);
};

const fetchReservation = (index) => reservationList.filter((element) => element.item_id === index);
export { fetchReservation, createReservation };