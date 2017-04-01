import * as firebase from 'firebase'
// adding th firebase api
var config = {
      apiKey: "AIzaSyCDBEH9lQYsLX6br8rBySNPOtdl5xzNRUw",
     authDomain: "fhirreact.firebaseapp.com",
     databaseURL: "https://fhirreact.firebaseio.com",
     storageBucket: "fhirreact.appspot.com",
     messagingSenderId: "401093836181"

};
// lets initalize the firebase app
firebase.initializeApp(config);
export const database = firebase.database();

// refrence to your storage service for firebase
export const storage = firebase.storage();
