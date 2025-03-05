import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import PropertyListing from './components/PropertyListing/PropertyListing';
import Profile from './components/Profile/Profile';
// import PropertyListing from './components/PropertyCard/PropertyCard';

import { UserContext } from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/users/:userId' element={<Profile />} />
        <Route path='/properties/:propertyId' element={<PropertyListing />} />
      </Routes>
    </>
  );
};

export default App;
