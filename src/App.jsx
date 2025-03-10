import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import UserProperties from './components/PropertyListing/UserProperties';
import PropertyListing from './components/PropertyListing/PropertyListing';
import PropertyCardSmall from './components/PropertyListing/PropertyCardSmall';
import PropertyForm from './components/PropertyForm/PropertyForm';
import Profile from './components/Profile/Profile';
import SearchBar from './components/SearchBar/SearchBar';
import { UserContext } from './contexts/UserContext';
import HostEventsByProperty from './components/HostEvents/HostEventsByProperty';

const App = () => {
  const { user } = useContext(UserContext);
  
  return (
    <>
      <NavBar/>
      {user && <SearchBar/>}
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/users/:userId' element={<Profile />} />
        <Route path='/properties' element={<UserProperties />} />
        <Route path='/properties/new' element={<PropertyForm />} />
        <Route path='/properties/:propertyId' element={<PropertyListing />} />
        <Route path='/properties/requests/:propertyId' element={<HostEventsByProperty />} />
      </Routes>
    </>
  );
};

export default App;
