import { useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useEffect, useState, useContext } from "react";
import { showHostEvent } from "../../services/hostEventService";
import HostEventsCardLarge from "./HostEventsCardLarge";
import { Typography, Box, CircularProgress } from "@mui/material";

const HostEventsByProperty = () => {
  // const { user } = useContext(UserContext);
  const { propertyId } = useParams();
  const [pendingHostEvents, setPendingHostEvents] = useState([]);
  const [confirmedHostEvents, setConfirmedHostEvents] = useState([]);
  const [cancelledHostEvents, setCancelledHostEvents] = useState([]);
  const [pastHostEvents, setPastHostEvents] = useState([]);

  useEffect(() => {
    const fetchHostEvents = async () => {
      const data = await showHostEvent(propertyId);
      const pendingEvents = data.hostEventsByPropertyId.filter(
        (pendingEvent) => pendingEvent.status === "pending"
      );
      setPendingHostEvents(pendingEvents);
      const confirmedEvents = data.hostEventsByPropertyId.filter(
        (confirmedEvent) => confirmedEvent.status === "confirmed"
      );
      setConfirmedHostEvents(confirmedEvents);
      const cancelledEvents = data.hostEventsByPropertyId.filter(
        (cancelledEvent) => cancelledEvent.status === "cancelled"
      );
      setCancelledHostEvents(cancelledEvents);
      const pastEvents = data.hostEventsByPropertyId.filter(
        (pastEvent) => pastEvent.status === "past"
      );
      setPastHostEvents(pastEvents);
    //   console.log("HOSTEVENT", data.hostEventsByPropertyId);
    };
    fetchHostEvents();
  }, [propertyId]);

  const handleConfirm = () => {
    
    useEffect(() => {
      const update

    }
  );

  }
 
  return !pendingHostEvents ? (
    <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Typography variant="h2" component="h2">
        Pending Guests
      </Typography>
      {pendingHostEvents.map((hostEvent) => (
        <HostEventsCardLarge handleConfirm={handleConfirm} key={hostEvent.id} hostEvent={hostEvent} />
      ))}

      <Typography variant="h2" component="h2">
        Confirmed Guests
      </Typography>
      {confirmedHostEvents.map((hostEvent) => (
        <HostEventsCardLarge key={hostEvent.id} hostEvent={hostEvent} />
      ))}

      <Typography variant="h2" component="h2">
        Cancelled Guests
      </Typography>
      {cancelledHostEvents.map((hostEvent) => (
        <HostEventsCardLarge key={hostEvent.id} hostEvent={hostEvent} />
      ))}

      <Typography variant="h2" component="h2">
        Past Guests
      </Typography>
      {pastHostEvents.map((hostEvent) => (
        <HostEventsCardLarge key={hostEvent.id} hostEvent={hostEvent} />
      ))}
    </>
  );
};

export default HostEventsByProperty;
