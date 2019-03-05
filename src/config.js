import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyDEetOT4bxrCmmiPTR6ohNBbj0PCvZ0jF0",
    authDomain: "myday-9afae.firebaseapp.com",
    databaseURL: "https://myday-9afae.firebaseio.com",
    projectId: "myday-9afae",
    storageBucket: "myday-9afae.appspot.com",
    messagingSenderId: "608691159171"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();