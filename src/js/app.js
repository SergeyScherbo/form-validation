const fields = document.querySelectorAll('.field input');

const validate = function(e) {
  if (this.value.length < 1) {
    this.parentNode.classList.remove('field_valid');
    this.parentNode.classList.add('field_notvalid');
  } else {
    this.parentNode.classList.remove('field_notvalid');
    this.parentNode.classList.add('field_valid');
  }
}

fields.forEach(field => field.addEventListener('blur', validate));
