import React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Link } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const { email, setEmail, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container sx={{ height: '100vh', paddingTop: '6rem' }}>
      <div className="login-title">
        <h1>We Got Your Back</h1>
      </div>
      <form
        onSubmit={e => resetPassword(e, navigate)}
        style={{
          maxWidth: '350px',
          width: '100%',
          margin: '4rem auto',
          textAlign: 'center',
          padding: '4rem 0',
          background: '#ffffffff',
          borderRadius: '30px',
        }}
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />{' '}
        <br /> <br />
        <Button variant="contained" type="submit">
          Reset Password
        </Button>{' '}
        <br />
        <br />
        <br />
        <div
          style={{
            margin: 'auto',
            width: '70%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <NavLink to="/login" variant="body2">
            <Link className="sign-in"> Sign In</Link>
          </NavLink>
          <NavLink to="/register" variant="body2">
            <Link className="sign-in"> Register</Link>
          </NavLink>
        </div>
      </form>
    </Container>
  );
};

export default ForgotPassword;
