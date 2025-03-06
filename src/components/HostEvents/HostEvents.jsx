import { useState } from "react";

const HostEvents = () => {
    const [properties, setProperties] = useState();
    
  useEffect(() => {
    const fetchProperty = async () => {
      const data = await propertyOne(propertyId);
      setProperty(data);
    };
    fetchProperty();
  }, [propertyId]);

    return (
        <h1>test</h1>
    )
};

export default HostEvents;