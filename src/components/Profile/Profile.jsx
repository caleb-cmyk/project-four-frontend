import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { userById } from "../../services/userService";
import { Typography, Box, CircularProgress } from "@mui/material";

const Profile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const data = await userById(userId);
            setUser(data);
            console.log("userdata", data);
        }
        fetchUser();
    }, [userId]);

    return (
        <>
          {!user ? (
            <Box sx={{ display: "flex", padding: "50px", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Typography variant="h2" component="h2">
                {`${user.user?.firstName} ${user.user?.lastName}`}
              </Typography>
            </>
          )}
        </>
      );
};

export default Profile;
