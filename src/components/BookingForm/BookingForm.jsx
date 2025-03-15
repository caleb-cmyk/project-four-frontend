import { useState } from "react";
import { hostEventSendRequest } from "../../services/hostEventService";
import { Box, Typography, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

const BookingForm = ({ property }) => {
  dayjs.extend(isSameOrBefore);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    hostId: property.propertyById.hostId._id,
    propertyId: property.propertyById._id,
    dateStart: "",
    dateEnd: "",
  });
  const { dateStart, dateEnd } = formData;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const dateStartSubmitted = formData.dateStart;
    const dateEndSubmitted = formData.dateEnd;
    if (dayjs(dateEndSubmitted).isSameOrBefore(dateStartSubmitted)) {
      setMessage("Please select an end date after your start date");
      return;
    }

    try {
      await hostEventSendRequest(formData);
      setMessage("Request Sent!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(dateStart && dateEnd);
  };

  const handleDateStartChange = (date) => {
    setFormData({ ...formData, dateStart: date.format("YYYY-MM-DD") });
  };
  const handleDateEndChange = (date) => {
    setFormData({ ...formData, dateEnd: date.format("YYYY-MM-DD") });
  };

  // https://stackoverflow.com/questions/71153388/how-to-disable-list-of-dates-in-mui-date-picker

  const unavailableDates = (date) => {
    let blackoutDates = [
      { dateStart: "2025-03-15", dateEnd: "2025-03-18" },
      { dateStart: "2025-03-20", dateEnd: "2025-03-23" },
      { dateStart: "2025-03-25", dateEnd: "2025-03-28" },
    ];
    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    // SIMON HELP ================================ return false, return false, return false instead of return [false, false, false]

    return blackoutDates.map((date) => (
      dayjs(formattedDate).isBetween(
          dayjs(date.dateStart),
          dayjs(date.dateEnd),
          null,
          "[)"
        )
    ));
    
    // return dayjs(formattedDate).isBetween(
      //   dayjs(blackoutDates[0].dateStart),
      //   dayjs(blackoutDates[0].dateEnd),
      //   null,
      //   "[)"
      // );
      
    };

  // const unavailableDates = (date) => {
  //   let blackoutDates = ["2025-03-15", "2025-03-18"];
  //   const formattedDate = dayjs(date).format("YYYY-MM-DD");
  //   return blackoutDates.includes(formattedDate);
  // };

  // return each individual dates from a range of dates and append into array

  return (
    <Box>
      <Typography>{message}</Typography>
      <form onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography>Select Start Date</Typography>
          <DatePicker
            onChange={(date) => handleDateStartChange(date)}
            showDaysOutsideCurrentMonth
            disablePast
            shouldDisableDate={unavailableDates}
          />
          <Typography>Select End Date</Typography>
          <DatePicker
            onChange={(date) => handleDateEndChange(date)}
            showDaysOutsideCurrentMonth
            disablePast
            shouldDisableDate={unavailableDates}
          />
        </LocalizationProvider>
        <Button variant="outlined" type="submit" disabled={isFormInvalid()}>
          Request
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;

// https://mui.com/x/react-date-pickers/validation/
// https://stackoverflow.com/questions/62243151/dayjs-to-js-date-for-mongo
// https://day.js.org/docs/en/display/format
