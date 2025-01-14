import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants"

const { API_KEY, AUTH_DOMAIN, PROJECTID, STORAGE_BUCKET, MESSAGINSENDERID, APP_ID} = Constants.manifest.extra

// Configuración de Firebase
const configuracionFirebase = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINSENDERID,
  appId: APP_ID,
};

// Inicializa la app de Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(configuracionFirebase);
}

// Configura Firebase Auth con persistencia usando AsyncStorage
const auth = initializeAuth(firebase.app(), {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage), // Usar AsyncStorage para persistencia
});

const db = getFirestore(firebase.app());

export { firebase, auth, db };
