import React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Link } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const { email, password, setEmail, setPassword, login, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container sx={{ height: '100vh', paddingTop: '6rem' }}>
      <div className="login-title">
        <h1>Welcome Back</h1>
      </div>
      <form
        onSubmit={e => login(e, navigate)}
        style={{
          maxWidth: '350px',
          width: '100%',
          margin: '3rem auto',
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
        />
        <br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />{' '}
        <br />
        <NavLink to="/forgot-password" variant="body2">
          <Link> Forgot password?</Link>
        </NavLink>
        <br />
        <div
          style={{
            margin: '1rem 0 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            sx={{ bgcolor: '#FFBC42', m: 1 }}
            onClick={e => googleSignIn(e, navigate)}
          >
            <GoogleIcon sx={{ paddingRight: '.5rem' }} />
            Google
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: '#6A040F', m: 1 }}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
