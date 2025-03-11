import { Typography, Box, CircularProgress } from "@mui/material";
import ConfirmedHostEvents from "./ConfirmedHostEvents";
import PendingHostEvents from "./PendingHostEvents";
import PastHostEvents from "./PastHostEvents";
import RejectedHostEvents from "./DeclinedHostEvents";
import CancelledHostEvents from "./CancelledHostEvents";

const HostEventsByProperty = () => {

  return (
    <>
      <PendingHostEvents />
      <ConfirmedHostEvents />
      <RejectedHostEvents />
      <CancelledHostEvents />
      <PastHostEvents />
    </>
  );
};

export default HostEventsByProperty;
