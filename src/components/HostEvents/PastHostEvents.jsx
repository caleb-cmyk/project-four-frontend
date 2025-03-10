import { useEffect, useState } from "react";
import { showHostEventByStatus } from "../../services/hostEventService";
import { useParams } from "react-router";
import {
  Typography,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";

const PastHostEvents = () => {
  const { propertyId } = useParams();
  const status = "past";
  const [pastHostEvents, setpastHostEvents] = useState([]);

  useEffect(() => {
    const fetchHostEvents = async () => {
      const data = await showHostEventByStatus(propertyId, status);
      setpastHostEvents(data.hostEventsByPropertyIdAndStatus);
    };
    fetchHostEvents();
  }, [propertyId]);

  return !pastHostEvents ? (
    <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Typography variant="h2" component="h2">
        Past Guests
      </Typography>
      {pastHostEvents.map((hostEvent) => (
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

        </Paper>
      ))}
    </>
  );
};

export default PastHostEvents;
