const container = document.querySelector('.email-container');
const button = document.querySelector('.button-confirmation');
const emailErro = document.querySelector('.emailErro');
const exibiEmail = document.querySelector('.email-confirm');
const buttonReturn = document.querySelector('.button-return');

function buttonConfirm(event) {
  event.preventDefault();
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;
  const error = document.querySelector('.erro');
  // expressao para validar email
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (email === '') {
    error.classList.add('ativo');
    emailErro.classList.add('ativo');
  } else if (!emailRegex.test(email)) {
    error.classList.add('ativo');
    emailErro.classList.add('ativo');
  } else {
    container.classList.add('ativo');
    exibiEmail.textContent = email;
  }
}
function returnButton(event) {
  event.preventDefault();
  container.remove('ativo');
  location.reload();
}

button.addEventListener('click', buttonConfirm);
buttonReturn.addEventListener('click', returnButton);
