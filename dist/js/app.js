'use strict';

var fields = document.querySelectorAll('.field input');

var validate = function validate(e) {
  if (this.value.length < 1) {
    this.parentNode.classList.remove('field_valid');
    this.parentNode.classList.add('field_notvalid');
  } else {
    this.parentNode.classList.remove('field_notvalid');
    this.parentNode.classList.add('field_valid');
  }
};

fields.forEach(function (field) {
  return field.addEventListener('blur', validate);
});