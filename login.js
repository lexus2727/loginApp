const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('pw');

if(username.toLowerCase() === 'helloworld' && pw === 'ilovecoding'){
  message.innerHTML = 'We love coding too!';
}
 else {
  message.innerHTML = 'Hurray for client-side validation!';
}
