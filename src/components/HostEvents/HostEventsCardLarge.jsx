import { Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const HostEventsCardLarge = ({ hostEvent, handleConfirm }) => {
const navigate = useNavigate();
const status = hostEvent.status;

  return (
    <Paper sx={{ margin: "2%", padding: "20px" }}>
      <Typography variant="h3" component="h3">
        {hostEvent.guestId.firstName} {hostEvent.guestId.lastName} from {hostEvent.guestId.countryOfResidence}
      </Typography>

      <Typography variant="h4" component="h4">
        {hostEvent.status}
      </Typography>

      <Typography variant="h4" component="h4">
        {hostEvent.dateStart} to {hostEvent.dateEnd}
      </Typography>

{/* self-executing function and switch case*/}
      {(() => {
    switch (status) {
      case "pending":
        return (
        <>
        <Button onClick={handleConfirm}>Confirm</Button>
        {/* <Button onClick={handleReject}>Reject</Button> */}
        </>
        )
      case "confirmed":
        return <Button>Cancel</Button>;
    }
  })()}

    </Paper>
  );
};

export default HostEventsCardLarge;
