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
} from "@mui/material";

const PendingTrips = () => {
  const status = "pending";
  const { userId } = useParams();
  const [pendingHostEvents, setpendingHostEvents] = useState();

  useEffect(() => {
    const fetchHostEvents = async () => {
      const data = await showHostEventByGuestIdAndStatus(userId, status);
      setpendingHostEvents(data.hostEventsByGuestIdAndStatus);
      console.log(data.hostEventsByGuestIdAndStatus);
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

    return  !pendingHostEvents ? (
      <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    ) : (
      <>
      <Typography variant="h2" component="h2" sx={{ margin: "2%", padding: "20px" }}>
        Pending Trips
      </Typography>
      {pendingHostEvents.map((hostEvent) => (
        <Paper key={hostEvent._id} sx={{ margin: "2%", padding: "20px" }}>
          <Typography variant="h3" component="h3">
          Your Host, {hostEvent.hostId.firstName} {hostEvent.hostId.lastName} from{" "}
            {hostEvent.hostId.countryOfResidence}
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

export default PendingTrips;
