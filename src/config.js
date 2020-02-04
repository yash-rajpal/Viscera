import Firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyD9UmvVJ5aXwqUtYmCBGooaxrmW19WQ5uc",
//     authDomain: "databasetry-9582b.firebaseapp.com",
//     databaseURL: "https://databasetry-9582b.firebaseio.com",
//     projectId: "databasetry-9582b",
//     storageBucket: "databasetry-9582b.appspot.com",
//     messagingSenderId: "40795955125",
//     appId: "1:40795955125:web:001ecdd3ff2f0d931603fc",
//     measurementId: "G-Q3QBDT5B8M"
//   };
// var config = {
//   apiKey: "AIzaSyCm9SNuPw2sPqkKi_fEvxws_fDU32nvRrg",
//   authDomain: "fir-testproj-34665.firebaseapp.com",
//   databaseURL: "https://fir-testproj-34665.firebaseio.com",
//   projectId: "fir-testproj-34665",
//   storageBucket: "fir-testproj-34665.appspot.com",
//   messagingSenderId: "277068007472",
//   appId: "1:277068007472:web:bb779d3cf261a6251045f5"
// };

const config = {
  apiKey: "AIzaSyCm9SNuPw2sPqkKi_fEvxws_fDU32nvRrg",
  authDomain: "fir-testproj-34665.firebaseapp.com",
  databaseURL: "https://fir-testproj-34665.firebaseio.com",
  projectId: "fir-testproj-34665",
  storageBucket: "fir-testproj-34665.appspot.com",
  messagingSenderId: "277068007472",
  appId: "1:277068007472:web:bb779d3cf261a6251045f5"
};
let app = Firebase.initializeApp(config);
export const db = app.database();