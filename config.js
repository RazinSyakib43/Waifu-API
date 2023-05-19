const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyAtzHZ1F_UGGZJvvum4BpRUxcPV7p3-7fs",
    authDomain: "waifu-api-dev.firebaseapp.com",
    projectId: "waifu-api-dev",
    storageBucket: "waifu-api-dev.appspot.com",
    messagingSenderId: "483831202881",
    appId: "1:483831202881:web:0352a403a1f0fddedef2c0",
    measurementId: "G-XWJB90XLVP"
  };

  firebase.initializeAoo(firebaseConfig);
  const db=firebase.firestore();
  const waifu=db.collection("waifus");
  module.exports = waifus;