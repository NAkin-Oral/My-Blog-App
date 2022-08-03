import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCICjfQGZwszvcbSBGfRoHkVjaES1jywoA',
  authDomain: 'blog-app-milestone-34c35.firebaseapp.com',
  databaseURL:
    'https://blog-app-milestone-34c35-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blog-app-milestone-34c35',
  storageBucket: 'blog-app-milestone-34c35.appspot.com',
  messagingSenderId: '383089872357',
  appId: '1:383089872357:web:b9e94d17b5c5208443b30c',
};

const app = initializeApp(firebaseConfig);

// firebase AuthImpl object(stores all the configs etc.)
export const auth = getAuth(app);
export const db = getDatabase(app);
