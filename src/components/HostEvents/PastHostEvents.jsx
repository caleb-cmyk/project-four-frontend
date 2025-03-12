import { useEffect, useState } from "react";
import { showHostEventByStatus } from "../../services/hostEventService";
import { useParams } from "react-router";
import moment from "moment";
import {
  Typography,
  Paper,
  CircularProgress,
  Box,
  Link,
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
      <Typography variant="h2" component="h2" sx={{ margin: "2%", padding: "20px" }}>
        Past Guests
      </Typography>
      {pastHostEvents.map((hostEvent) => (
        <Paper key={hostEvent._id} sx={{ margin: "2%", padding: "20px" }}>
          <Typography variant="h3" component="h3">
            <Link underline="none" href={`/users/${hostEvent.guestId._id}`}>
            {hostEvent.guestId.firstName} {hostEvent.guestId.lastName} {}
            </Link>
            from {hostEvent.guestId.countryOfResidence}
          </Typography>

          <Typography variant="h4" component="h4">
            {hostEvent.status}
          </Typography>

          <Typography variant="h4" component="h4">
          {moment(hostEvent.dateStart).format("dddd, Do MMM YYYY")} - {moment(hostEvent.dateEnd).format("dddd, Do MMM YYYY")}
          </Typography>

        </Paper>
      ))}
    </>
  );
};

export default PastHostEvents;
