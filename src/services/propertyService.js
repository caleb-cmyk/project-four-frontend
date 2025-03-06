const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/properties`;

const propertyOne = async (propertyId) => {
  try {
    const res = await fetch(`${BASE_URL}/${propertyId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const propertiesHost = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { propertyOne, propertiesHost };
