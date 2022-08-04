import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    currentUser(setUser);
  }, []);

  const resetInputs = () => {
    setEmail('');
    setPassword('');
    setFname('');
    setLname('');
  };

  const register = async (e, navigate) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password, fname, lname);
      const displayName = `${fname} ${lname}`;
      await updateProfile(auth.currentUser, { displayName: displayName });
      toast.success('User succesfully registered');
      navigate('/');
      resetInputs();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const login = async (e, navigate) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('user succesfully logged in');
      navigate('/');
      resetInputs();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const logout = async navigate => {
    try {
      await signOut(auth);
      toast.success('Logged out succesfully');
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const currentUser = async setUser => {
    try {
      onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        } else {
          setUser('');
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const provider = new GoogleAuthProvider();

  const googleSignIn = (e, navigate) => {
    e.preventDefault();
    try {
      signInWithPopup(auth, provider).then(() => {
        navigate('/');
      });
    } catch (err) {
      toast.error(err);
    }
  };

  const resetPassword = async (e, navigate) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      navigate('/');
      toast.success('New password is sent to your email!!!');
      setEmail('');
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        email,
        password,
        setEmail,
        setPassword,
        login,
        register,
        fname,
        lname,
        setFname,
        setLname,
        googleSignIn,
        user,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
