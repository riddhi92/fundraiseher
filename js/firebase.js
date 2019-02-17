var config = {
   apiKey: "AIzaSyAwFLnhNc8GOWcnXpIDjq1OEpXfgsiINd4",
   authDomain: "fundraiseher.firebaseapp.com",
   databaseURL: "https://fundraiseher.firebaseio.com",
   projectId: "fundraiseher",
   storageBucket: "fundraiseher.appspot.com",
   messagingSenderId: "738090671270"
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});
