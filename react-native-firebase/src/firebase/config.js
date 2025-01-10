import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase
const configuracionFirebase = {
  apiKey: 'AIzaSyA5Bk8h6O34_O6e6rO7yf3RX_kO7KCXJeM',
  authDomain: 'reactnativecourse-fbe79.firebaseapp.com',
  projectId: 'reactnativecourse-fbe79',
  storageBucket: 'reactnativecourse-fbe79.appspot.com',
  messagingSenderId: '12345-insertar-tuyo',
  appId: '1:131788505099:android:bf30408df1a630ce35870e',
};

// Inicializa la app de Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(configuracionFirebase);
}

// Configura Firebase Auth con persistencia usando AsyncStorage
const auth = initializeAuth(firebase.app(), {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage), // Usar AsyncStorage para persistencia
});

export { firebase, auth };
