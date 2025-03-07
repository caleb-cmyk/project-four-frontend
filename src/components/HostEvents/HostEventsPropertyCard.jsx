import { useEffect } from "react";
import { showHostEvent } from "../../services/hostEventService";

const HostEventsPropertyCard = ({ property }) => {

    useEffect(() => {
        const fetchHostEvents = async () => {
          const propertyId = property._id;
          const data = await showHostEvent(propertyId);
          console.log("HOSTEVENT", data);
        };
        fetchHostEvents();
      }, [property]);

    return (
        <>
        <h1>{property.propertyName}</h1>
        <h4>New Requests</h4>
        <h6>Confirmed Requests</h6>
        </>
    );
};

export default HostEventsPropertyCard;

// {
//     "hostEventsByPropertyId": [
//         {
//             "_id": "67cabdeb5923403304b701e2",
//             "hostId": "67cabac9e8a4daab976501ac",
//             "guestId": {
//                 "_id": "67cabb76e8a4daab976501b5",
//                 "email": "bob@yahoo.com",
//                 "firstName": "Bob",
//                 "lastName": "Saget",
//                 "phoneCountry": 65,
//                 "phoneNumber": 89068618,
//                 "userType": "Host",
//                 "dateOfBirth": "1950-10-10T00:00:00.000Z",
//                 "gender": "Male",
//                 "countryOfResidence": "United States",
//                 "createdAt": "2025-03-07T09:25:10.267Z",
//                 "updatedAt": "2025-03-07T09:25:10.267Z",
//                 "__v": 0
//             },
//             "propertyId": "67cabd005923403304b701c4",
//             "dateStart": "2025-03-07T00:00:00.000Z",
//             "dateEnd": "2025-03-09T00:00:00.000Z",
//             "confirmed": "false",
//             "createdAt": "2025-03-07T09:35:39.843Z",
//             "updatedAt": "2025-03-07T09:35:39.843Z",
//             "__v": 0
//         },
//         {
//             "_id": "67cabdf65923403304b701e4",
//             "hostId": "67cabac9e8a4daab976501ac",
//             "guestId": {
//                 "_id": "67cabb76e8a4daab976501b5",
//                 "email": "bob@yahoo.com",
//                 "firstName": "Bob",
//                 "lastName": "Saget",
//                 "phoneCountry": 65,
//                 "phoneNumber": 89068618,
//                 "userType": "Host",
//                 "dateOfBirth": "1950-10-10T00:00:00.000Z",
//                 "gender": "Male",
//                 "countryOfResidence": "United States",
//                 "createdAt": "2025-03-07T09:25:10.267Z",
//                 "updatedAt": "2025-03-07T09:25:10.267Z",
//                 "__v": 0
//             },
//             "propertyId": "67cabd005923403304b701c4",
//             "dateStart": "2025-04-12T00:00:00.000Z",
//             "dateEnd": "2025-04-19T00:00:00.000Z",
//             "confirmed": "false",
//             "createdAt": "2025-03-07T09:35:50.185Z",
//             "updatedAt": "2025-03-07T09:35:50.185Z",
//             "__v": 0
//         }
//     ]
// }