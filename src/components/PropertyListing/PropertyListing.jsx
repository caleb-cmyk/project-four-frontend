import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { propertyOne } from "../../services/propertyService";
import { Typography, Box, CircularProgress } from "@mui/material";

const PropertyListing = () => {
  const { propertyId } = useParams();

  const [property, setProperty] = useState();

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await propertyOne(propertyId);
      setProperty(data);
      console.log(data);
    };
    fetchProperty();
  }, [propertyId]);

  return (
    <>
      {!property ? (
        <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h2" component="h2">
            {property.propertyById?.propertyName}
          </Typography>
          <Typography variant="h4" component="h4">
            {`${property.propertyById?.hostId.firstName} ${property.propertyById?.hostId.lastName}`}
          </Typography>
        </>
      )}
    </>
  );
};

export default PropertyListing;
