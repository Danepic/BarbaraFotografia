  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-T8UQQeNxk2JO3A6RH5jWbfBVgki6JOw",
    authDomain: "barbara-alves-fotografia.firebaseapp.com",
    databaseURL: "https://barbara-alves-fotografia.firebaseio.com",
    projectId: "barbara-alves-fotografia",
    storageBucket: "barbara-alves-fotografia.appspot.com",
    messagingSenderId: "2313726941"
  };
  firebase.initializeApp(config);
  
  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: 'dashboard.htlm',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);