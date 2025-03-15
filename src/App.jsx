import { useContext } from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import UserProperties from "./components/PropertyListing/UserProperties";
import PropertyListing from "./components/PropertyListing/PropertyListing";
import Trips from "./components/Trips/Trips";
import PropertyForm from "./components/PropertyForm/PropertyForm";
import Profile from "./components/Profile/Profile";
import SearchBar from "./components/SearchBar/SearchBar";
import { UserContext } from "./contexts/UserContext";
import HostEventsByProperty from "./components/HostEvents/HostEventsByProperty";
import Search from "./components/SearchBar/Search";
import { Typography } from "@mui/material";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      {user && <SearchBar />}
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/users/:userId" element={<Profile />} />
        <Route path="/trips/:userId" element={<Trips />} />
        <Route path="/properties" element={<UserProperties />} />
        <Route path="/properties/new" element={<PropertyForm />} />
        <Route path="/properties/:propertyId" element={<PropertyListing />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/properties/requests/:propertyId"
          element={<HostEventsByProperty />}
        />
        <Route
          path="*"
          element={
            <Typography
              variant="h3"
              component="h3"
              sx={{ margin: "2%", padding: "20px", textAlign: "center" }}
            >
              Oops, there's nothing on this page!
            </Typography>
          }
        />
      </Routes>
    </>
  );
};

export default App;
