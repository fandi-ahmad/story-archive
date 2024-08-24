import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const env = import.meta.env
const firebaseConfig = {
  apiKey: env.VITE_STAR_apiKey,
  authDomain: env.VITE_STAR_authDomain,
  databaseURL: env.VITE_STAR_databaseURL,
  projectId: env.VITE_STAR_projectId,
  storageBucket: env.VITE_STAR_storageBucket,
  messagingSenderId: env.VITE_STAR_messagingSenderId,
  appId: env.VITE_STAR_appId,
  measurementId: env.VITE_STAR_measurementId
};

const app = initializeApp(firebaseConfig);
const Firebase = getDatabase(app);

export default Firebase