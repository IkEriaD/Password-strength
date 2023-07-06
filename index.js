const passwordEl = document.querySelector('.password');
const messageEl = document.querySelector('.message');
const strenghtEl = document.querySelector('.strenght');

passwordEl.addEventListener('input', () => {
  if (passwordEl.value.length > 0) {
    messageEl.style.display = 'block';
  } 
  else {
    messageEl.style.display = 'none';
  }
  if (passwordEl.value.length < 4) {
    strenghtEl.innerHTML = 'weak';
    passwordEl.style.borderColor = '#ff5925';
    messageEl.style.color = '#ff5925'
  }
  else if (passwordEl.value.length >= 4 && passwordEl.value.length < 8) {
    strenghtEl.innerHTML = 'medium';
    passwordEl.style.borderColor = 'yellow';
    messageEl.style.color = 'yellow';
  }
  else if (passwordEl.value.length >= 8) {
    strenghtEl.innerHTML = 'strong';
    passwordEl.style.borderColor = '#26d730';
    messageEl.style.color = '#26d730';
  }

});