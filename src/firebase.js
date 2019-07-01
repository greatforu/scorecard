import * as firebase from 'firebase';


const config={
    apiKey: "AIzaSyCie5x_CQPwM3nSjYvsePHtpF9hekHOVNc",
    authDomain: "scorecard-9dc0c.firebaseapp.com",
    databaseURL: "https://scorecard-9dc0c.firebaseio.com",
    projectId: "scorecard-9dc0c",
    storageBucket: "",
    messagingSenderId: "171409138960",
    appId: "1:171409138960:web:fb8753d4770a07b4"
}

firebase.initializeApp(config);

export default firebase