import { useEffect, useState } from "react";
import { propertiesHost } from "../../services/propertyService";
import { Box, CircularProgress } from "@mui/material";
import { showHostEvent } from "../../services/hostEventService";

const UserProperties = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesIds, setPropertiesIds] = useState([]);
  const [hostEvents, setHostEvents] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await propertiesHost();
      setProperties(data.propertiesByHostId);
      
      const ids = [];
      const getIds = () => {
        for (let i = 0; i < data.propertiesByHostId.length; i++) {
          ids.push(data.propertiesByHostId[i]._id);
        }
      };
      getIds();
      setPropertiesIds(ids);
    };
    fetchProperty();
  }, []);

  useEffect(() => {
    const fetchHostEvents = async () => {
      const data = await showHostEvent("67cabd005923403304b701c4");
      setHostEvents(data);
      // console.log(data)
    };
    fetchHostEvents();
  }, []);

  return !properties ? (
    <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      {/* {properties.map((property) => (
                <PropertyCardLarge key={property._id} property={property} />
            ))} */}
    </>
  );
};

export default UserProperties;
