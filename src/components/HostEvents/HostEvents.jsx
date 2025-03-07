import { useState, useEffect } from "react";
import { propertiesHost } from "../../services/propertyService";
import { showHostEvent } from "../../services/hostEventService";
import HostEventsPropertyCard from "./HostEventsPropertyCard";

const HostEvents = () => {
  const [properties, setProperties] = useState();
  const propertiesTest = 
  [
    {
        "_id": "67cabd005923403304b701c4",
        "hostId": "67cabac9e8a4daab976501ac",
        "propertyName": "Mountain House",
        "countryOfProperty": "New Zealand",
        "postcode": 726200,
        "addressLine": "Mount Cook, New Zealand",
        "validated": true,
        "listed": false,
        "createdAt": "2025-03-07T09:31:44.192Z",
        "updatedAt": "2025-03-07T09:31:44.192Z",
        "__v": 0
    },
    {
        "_id": "67cabd655923403304b701c7",
        "hostId": "67cabac9e8a4daab976501ac",
        "propertyName": "Forest House",
        "countryOfProperty": "Australia",
        "postcode": 7200,
        "addressLine": "Huon Road, Australia",
        "validated": true,
        "listed": false,
        "createdAt": "2025-03-07T09:33:25.534Z",
        "updatedAt": "2025-03-07T09:33:25.534Z",
        "__v": 0
    }
];

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await propertiesHost();
      setProperties(data.propertiesByHostId);
      // console.log(data.propertiesByHostId);
    };
    fetchProperty();
  }, []);

  // useEffect(() => {
  //   const fetchHostEvents = async () => {
  //     const propertyId = properties[0]._id;
  //     const data = await showHostEvent(propertyId);
  //     console.log(data);
  //   };
  //   fetchHostEvents();
  // }, [properties]);

  return (
    <>
      <h1>request start date:</h1>
      <h1>request end date:</h1>
      {propertiesTest.map((property) => (
        <h1 key={property.id}>
          <HostEventsPropertyCard property={property} />
        </h1>
      ))}
    </>
  );
};

export default HostEvents;
