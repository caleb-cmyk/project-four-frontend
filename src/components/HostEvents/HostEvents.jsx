import { useState, useEffect } from "react";
import { propertiesHost } from "../../services/propertyService";
import { showHostEvent } from "../../services/hostEventService";
import HostEventsPropertyCard from "./HostEventsPropertyCard";

const HostEvents = () => {
    const [properties, setProperties] = useState(
        // [
        //     {
        //         "_id": "67c94d1deaaed689cd7df525",
        //         "hostId": "67c5503f2097f1775209d91e",
        //         "propertyName": "Beach House",
        //         "countryOfProperty": "United States",
        //         "postcode": 59700,
        //         "addressLine": "Malibu, United States",
        //         "validated": true,
        //         "listed": false,
        //         "createdAt": "2025-03-06T07:22:05.454Z",
        //         "updatedAt": "2025-03-06T07:22:05.454Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "67c9651fb7066a105eb8a753",
        //         "hostId": "67c5503f2097f1775209d91e",
        //         "propertyName": "Forest House",
        //         "countryOfProperty": "Australia",
        //         "postcode": 7200,
        //         "addressLine": "Huon Road, Australia",
        //         "validated": true,
        //         "listed": false,
        //         "createdAt": "2025-03-06T09:04:31.679Z",
        //         "updatedAt": "2025-03-06T09:04:31.679Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "67c99199b7066a105eb8a7d2",
        //         "hostId": "67c5503f2097f1775209d91e",
        //         "propertyName": "Mountain House",
        //         "countryOfProperty": "New Zealand",
        //         "postcode": 726200,
        //         "addressLine": "Point Cook, New Zealand",
        //         "validated": true,
        //         "listed": false,
        //         "createdAt": "2025-03-06T12:14:17.884Z",
        //         "updatedAt": "2025-03-06T12:14:17.884Z",
        //         "__v": 0
        //     }
        // ]
    );
    
  useEffect(() => {
    const fetchProperty = async () => {
      const data = await propertiesHost();
      setProperties(data.propertiesByHostId);
    //   console.log(data.propertiesByHostId);

    //   console.log(data.propertiesByHostId[0]._id)
      const propertyId = data.propertiesByHostId[1]._id
      const hostEventData = await showHostEvent(propertyId);
    //   console.log(data.propertiesByHostId)
    //   console.log(hostEventData.hostEventsByPropertyId[0].dateStart);
    };
    fetchProperty();
  }, []);

    return (
        <>
        <h1>request start date:</h1>
        <h1>request end date:</h1>
        {/* {properties.map((property) => (
  <h1 key={property.id}><HostEventsPropertyCard property={property} /></h1>
))} */}
        </>
    )
};

export default HostEvents;