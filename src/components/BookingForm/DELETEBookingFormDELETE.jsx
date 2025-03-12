import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { hostEventSendRequest } from "../../services/hostEventService";
import { UserContext } from "../../contexts/UserContext";
import { Box, Typography, Button, TextField } from "@mui/material";

const BookingForm = ({ property }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    hostId: property.propertyById.hostId._id,
    propertyId: property.propertyById._id,
    dateStart: "",
    dateEnd: "",
  });
  const { dateStart, dateEnd } = formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await hostEventSendRequest(formData);
      console.log("DATESTART", dateStart);
      console.log("DATEEND", dateEnd);
      console.log(formData);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(dateStart && dateEnd);
  };

  return (
    <Box>
      <Typography>{message}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ padding: "0px 0px 20px 0px" }}
          label="Date From YYYY-MM-DD"
          variant="outlined"
          type="text"
          autoComplete="off"
          id="dateStart"
          onChange={handleChange}
          value={formData.dateStart}
          name="dateStart"
          required
        />
        <TextField
          sx={{ padding: "0px 0px 20px 0px" }}
          label="Date To YYYY-MM-DD"
          variant="outlined"
          type="text"
          autoComplete="off"
          id="dateEnd"
          onChange={handleChange}
          value={formData.dateEnd}
          name="dateEnd"
          required
        />
        <Button variant="outlined" type="submit" disabled={isFormInvalid()}>
          Request
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;

// https://mui.com/x/react-date-pickers/validation/

// 1. Date has to be in the future
// 2. Date from has to be before date to
// 3. Date cannot exceed 2 years from now (too far into the future)
// 4. Date
