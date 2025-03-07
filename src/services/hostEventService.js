const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hostEvents`;

const showHostEvent = async (propertyId) => {
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

// const token = localStorage.getItem("token");

// if (!token) {
//   throw new Error("Unauthorised.");
// }

// try {
//   const res = await fetch(`${BASE_URL}/${propertyId}`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });

//   const data = await res.json();
//   return data;
// } catch (err) {
//   console.log(err);
//   throw err;
// }

const hostEventSendRequest = async (formData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Unauthorised.");
  }

  try {
    const res = await fetch(`${BASE_URL}/new`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { hostEventSendRequest, showHostEvent };