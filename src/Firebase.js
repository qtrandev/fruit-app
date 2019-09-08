import firebase from 'firebase';

let databaseSingleton;

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    if (!databaseSingleton) {
      firebase.initializeApp(config);
      databaseSingleton = firebase.database();
    }
  }

  makeRequest() {
    databaseSingleton.ref('/tips').once('value')
      .then(sections => {
          console.log("Got something from Firebase: "+JSON.stringify(sections));
          //dispatch(addItem(sections.child("test").val()));
      })
      .catch(error => {
        console.log("Got error from Firebase: "+JSON.stringify(error));
      });
  }

  requestFruitTips(callback) {
    let result = [];
    databaseSingleton.ref('/tips').once('value')
      .then(sections => {
          console.log("Got something from Firebase: "+JSON.stringify(sections));
          let obj = sections.val();
          for (var x in obj) {
            result.push(obj[x]);
          }
          //console.log("RESULT"+JSON.stringify(result[1]));
          callback(result);
      })
      .catch(error => {
        console.log("Got error from Firebase: "+JSON.stringify(error));
      });
  }
}
export default Firebase;