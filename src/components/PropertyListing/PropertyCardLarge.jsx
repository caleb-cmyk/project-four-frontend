import { Paper, Typography } from "@mui/material";

const PropertyCardLarge = ({ property }) => {

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

    </Paper>
  );
};

export default PropertyCardLarge;
