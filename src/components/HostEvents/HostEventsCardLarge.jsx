import { Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const HostEventsCardLarge = ({ hostEvent }) => {
const navigate = useNavigate();

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

      <Button>
        Confirm
      </Button>

      <Button>
        Reject
      </Button>

    </Paper>
  );
};

export default HostEventsCardLarge;
