import { Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const PropertyCardLarge = ({ property }) => {
const navigate = useNavigate();

console.log(property);
  return (
    <Paper sx={{ margin: "2%", padding: "20px" }}>
      <Typography variant="h3" component="h3">
        {property.propertyName}
      </Typography>

      <Typography variant="h4" component="h4">
        {`${property.hostId.firstName}'s Place`}
      </Typography>

      <Typography variant="h4" component="h4">
        {property.addressLine}
      </Typography>

      <Button onClick={() => navigate(`/properties/${property._id}`)}>
        View
      </Button>

      <Button>
        Edit
      </Button>

      <Button onClick={() => navigate(`/properties/requests/${property._id}`)}>
        Requests
      </Button>

    </Paper>
  );
};

export default PropertyCardLarge;
