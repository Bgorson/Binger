import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDYQ39kqFcFqNFx6hWxAF5iJVIUq8RWxew',
  authDomain: 'binger-3ac6e.firebaseapp.com',
  databaseURL: 'https://binger-3ac6e.firebaseio.com',
  projectId: 'binger-3ac6e',
  storageBucket: 'binger-3ac6e.appspot.com',
  messagingSenderId: '380873901031',
  appId: '1:380873901031:web:fae74172c3cd03e83ef342',
  measurementId: 'G-GYG7DECGBM',
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
