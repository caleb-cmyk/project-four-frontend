const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hostEvents`;

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

export { hostEventSendRequest };