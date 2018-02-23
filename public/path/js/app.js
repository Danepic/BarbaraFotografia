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

  var r = /\S+@\S+\.\S+/; //máscara de email

  if (email === "") {
    return Materialize.toast("Email deve ser preenchido !", 3000);
  }

  if (!r.test(email)) {
    return Materialize.toast("Email informado está inválido !", 3000);
  }

  //Valida se já existe o email
  if (pass === "") {
    return Materialize.toast("Senha deve ser preenchida !", 3000);
  }

  if (pass.length < 6) {
    return Materialize.toast("Senha deve conter no mínimo 6 caracteres !", 3000);
  }

  //Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch((e) => {

    Materialize.toast(e.message, 3000);
  });

//Add register event
btnRegister.addEventListener('click', e => {
  //Delete components
  formDefaultSocial.classList.add("disableForm");
  formDefaultButtons.classList.add("disableForm");
  formCadastro.classList.remove("disableForm");
});

//Add voltar event
btnVoltar.addEventListener('click', e => {
  //Delete components
  formDefaultSocial.classList.remove("disableForm");
  formDefaultButtons.classList.remove("disableForm");
  formCadastro.classList.add("disableForm");
});

//Add register event
btnRegistrar.addEventListener('click', e => {
  //Get variables
  const dbRefEmails = firebase.database().ref();
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const passConfirm = txtPasswordConfirm.value;
  const obj = txtObjetivo.value;
  const auth = firebase.auth();

  var r = /\S+@\S+\.\S+/; //máscara de email

  if (email === "") {
    return Materialize.toast("Email deve ser preenchido !", 3000);
  }

  if (!r.test(email)) {
    return Materialize.toast("Email informado está inválido !", 3000);
  }

  //Valida se já existe o email
  if (pass === "") {
    return Materialize.toast("Senha deve ser preenchida !", 3000);
  }

  if (pass.length < 6) {
    return Materialize.toast("Senha deve conter no mínimo 6 caracteres !", 3000);
  }

  if (passConfirm === "") {
    return Materialize.toast("Confirmação de senha deve ser preenchida !", 3000);
  }

  if (pass !== passConfirm) {
    return Materialize.toast("Senha de confirmação diferente da original !", 3000);
  }

  if (obj === "") {
    return Materialize.toast("Objetivo deve ser preenchido !", 3000);
  }

  //Insere o email na base de dados
  //Identificador
  var id = btoa(email);
  console.log(id);
  var emailsRef = dbRefEmails.child("emails").child(id).set({ email: email });

//Sign Up
const promise = auth.createUserWithEmailAndPassword(email, pass);
promise.catch(e => Materialize.toast(e.message, 3000));
});