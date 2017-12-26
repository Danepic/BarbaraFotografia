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

  //Get elements txt
  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const txtPasswordConfirm = document.getElementById('password-confirm');
  const txtObjetivo = document.getElementById('objetivo');

  //Get elements btn
  const btnLogin = document.getElementById('login');
  const btnRegister = document.getElementById('register');
  const btnFacebook = document.getElementById('facebbok');
  const btnGmail = document.getElementById('gmail');
  const btnVoltar = document.getElementById('voltar');
  const btnRegistrar = document.getElementById('btn-registrar');

  //Get elements forms
  const formDefaultSocial = document.getElementById('formDefaultSocial');
  const formDefaultButtons = document.getElementById('formDefaultButtons');
  const formCadastro = document.getElementById('formCadastro');

  //Add login event
  btnLogin.addEventListener('click', e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add register event
  btnRegister.addEventListener('click', e => {
    //Delete components
    formDefaultSocial.classList.add("disableForm");
    formDefaultButtons.classList.add("disableForm");
    formCadastro.classList.remove("disableForm");

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    //const promise = auth.signInWithEmailAndPassword(email, pass);
    //promise.catch(e => console.log(e.message));
  });

  //Add voltar event
  btnVoltar.addEventListener('click', e => {
    console.log("teste");
    //Delete components
    formDefaultSocial.classList.remove("disableForm");
    formDefaultButtons.classList.remove("disableForm");
    formCadastro.classList.add("disableForm");

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    //const promise = auth.signInWithEmailAndPassword(email, pass);
    //promise.catch(e => console.log(e.message));
  });