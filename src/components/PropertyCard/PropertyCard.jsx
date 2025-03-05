import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const PropertyCard = () => {

    const [propertiesList, setPropertiesList] = useState([]);

    useEffect(() => {
        const fetchProperty = async () => {
          const data = await friendsService.indexFriends(friendId);
          setPropertiesList(data);
        };
        fetchProperty();
      }, []);
      

  return (
    <>
      <Box>
        <Typography variant="h2" component="h2">
            Property Name
        </Typography>
        <Typography variant="h3" component="h3">
            Property Rating
        </Typography>
      </Box>
    </>
  );
};

export default PropertyCard;
