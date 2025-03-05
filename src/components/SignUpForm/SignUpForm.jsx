import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

import { signUp } from '../../services/authService';

import { UserContext } from '../../contexts/UserContext';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    passwordConf: '',
  });

  const { email, password, passwordConf, firstName, lastName, phoneNumber } = formData;

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate('/');
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(email && password && password && firstName && lastName && phoneNumber === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='email'>First Name:</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            name='firstName'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Last Name:</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            name='lastName'
            onChange={handleChange}
            required
          />
        </div>
        {/* Gender */}
        {/* Date of Birth */}
        {/* Country */}
        <div>
          <label htmlFor='email'>Phone Number:</label>
          <input
            type='text'
            id='phoneNumber'
            value={phoneNumber}
            name='phoneNumber'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email Address:</label>
          <input
            type='text'
            id='email'
            value={email}
            name='email'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='confirm'>Confirm Password:</label>
          <input
            type='password'
            id='confirm'
            value={passwordConf}
            name='passwordConf'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
