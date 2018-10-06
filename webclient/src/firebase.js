import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDx9MLamM3bB_7G2GxhG7_PSuBR-P2XfOM',
  authDomain: 'mhc-xhcwst.firebaseapp.com',
  databaseURL: 'https://mhc-xhcwst.firebaseio.com',
  projectId: 'mhc-xhcwst',
  /*storageBucket: "mhc-xhcwst.appspot.com",
  messagingSenderId: "553095309941"*/
};

firebase.initializeApp(config);

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

export default db;
