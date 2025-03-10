import { useEffect, useState } from "react";
import { showHostEventByStatus } from "../../services/hostEventService";
import { useParams } from "react-router";
import {
  Typography,
  Paper,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";

const PendingHostEvents = () => {
  const { propertyId } = useParams();
  const status = "pending";
  const [pendingHostEvents, setpendingHostEvents] = useState([]);

  useEffect(() => {
    const fetchHostEvents = async () => {
      const data = await showHostEventByStatus(propertyId, status);
      setpendingHostEvents(data.hostEventsByPropertyIdAndStatus);
      console.log(data.hostEventsByPropertyIdAndStatus);
      console.log("TEST", data.hostEventsByPropertyIdAndStatus);
    };
    fetchHostEvents();
  }, [propertyId]);

  const handleConfirm = () => {
    // insert function body
  };

  const handleDecline = () => {
    // insert function body
  };

  return !pendingHostEvents ? (
    <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Typography variant="h2" component="h2">
        New Requests
      </Typography>
      {pendingHostEvents.map((hostEvent) => (
        <Paper key={hostEvent._id} sx={{ margin: "2%", padding: "20px" }}>
          <Typography variant="h3" component="h3">
            {hostEvent.guestId.firstName} {hostEvent.guestId.lastName} from{" "}
            {hostEvent.guestId.countryOfResidence}
          </Typography>

          <Typography variant="h4" component="h4">
            {hostEvent.status}
          </Typography>

          <Typography variant="h4" component="h4">
            {hostEvent.dateStart} to {hostEvent.dateEnd}
          </Typography>

          <Button onClick={handleConfirm}>Confirm</Button>
          <Button onClick={handleDecline}>Decline</Button>
        </Paper>
      ))}
    </>
  );
};

export default PendingHostEvents;
