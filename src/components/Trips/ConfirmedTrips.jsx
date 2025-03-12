import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { showHostEventByGuestIdAndStatus } from "../../services/hostEventService";
import { updateHostEventStatus } from "../../services/hostEventService";
import moment from "moment";
import {
  Typography,
  Paper,
  CircularProgress,
  Box,
  Button,
  Link,
} from "@mui/material";

const ConfirmedTrips = () => {
  const status = "confirmed";
  const { userId } = useParams();
  const [confirmedHostEvents, setConfirmedHostEvents] = useState();

  useEffect(() => {
    const fetchHostEvents = async () => {
      const data = await showHostEventByGuestIdAndStatus(userId, status);
      setConfirmedHostEvents(data.hostEventsByGuestIdAndStatus);
    };
    fetchHostEvents();
  }, [userId]);

  const handleCancel = async (hostEventId) => {
    try {
      await updateHostEventStatus({ status: "cancelled" }, hostEventId);
  
    } catch (err) {
      console.error("error:", err.message);
    }
  };

    return  !confirmedHostEvents ? (
      <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    ) : (
      <>
      <Typography variant="h2" component="h2" sx={{ margin: "2%", padding: "20px" }}>
        Confirmed Requests
      </Typography>
      {confirmedHostEvents.map((hostEvent) => (
        <Paper key={hostEvent._id} sx={{ margin: "2%", padding: "20px" }}>
          <Typography variant="h3" component="h3">
          {hostEvent.propertyId.propertyName} in {hostEvent.propertyId.countryOfProperty}
          </Typography>
          
          <Typography variant="h4" component="h4">
          Your Host, 
          <Link underline="none" href={`/users/${hostEvent.hostId._id}`}>
          {} {hostEvent.hostId.firstName} {hostEvent.hostId.lastName}
          </Link>
          </Typography>

          <Typography variant="h4" component="h4">
            {hostEvent.status}
          </Typography>

          <Typography variant="h4" component="h4">
          {moment(hostEvent.dateStart).format("dddd, Do MMM YYYY")} - {moment(hostEvent.dateEnd).format("dddd, Do MMM YYYY")}
          </Typography>

          <Button onClick={() => handleCancel(hostEvent._id)}>Cancel</Button>
        </Paper>
      ))}
    </>
    );
};

export default ConfirmedTrips;
