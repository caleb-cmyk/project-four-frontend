import { useEffect, useState } from 'react';
import PropertyCardLarge from './PropertyCardLarge';
import { propertiesHost } from '../../services/propertyService';
import { Box, CircularProgress } from "@mui/material";

const UserProperties = () => {
const [properties, setProperties] = useState([]);

useEffect(() => {
    const fetchProperty = async () => {
        const data = await propertiesHost();
        setProperties(data.propertiesByHostId);
        console.log("TETTAT", data.propertiesByHostId);
    };
    fetchProperty();
  }, []);

  return (
    !properties ? (
        <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
            <CircularProgress />
        </Box>
    ) : (
        <>
            {properties.map((property) => (
                <PropertyCardLarge key={property._id} property={property} />
            ))}
        </>
    )
);

};

export default UserProperties