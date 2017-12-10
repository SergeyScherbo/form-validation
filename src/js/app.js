const fields = document.querySelectorAll('.field input');

const validate = function(e) {
  const emailReg = /[@+.]/;
  const numReg = /\D/;
  if (this.value.length < 1) {
    this.parentNode.classList.remove('field_valid');
    this.parentNode.classList.add('field_notvalid');
  } else {
    this.parentNode.classList.remove('field_notvalid');
    this.parentNode.classList.add('field_valid');
  }

  if (this.type === 'email' && !emailReg.test(this.value)) {
    alert('Email field is not valid!');
    // this.focus();
  }

  if (this.type === 'tel' && numReg.test(this.value)) {
    alert('Phone field is not valid!');
    this.focus();
  }
};

fields.forEach(field => field.addEventListener('blur', validate));
