'use strict';

var fields = document.querySelectorAll('.field input');

var validate = function validate(e) {
  var emailReg = /[@+.]/;
  var numReg = /\D/;
  if (this.value.length < 1) {
    this.parentNode.classList.remove('field_valid');
    this.parentNode.classList.add('field_notvalid');
  } else {
    this.parentNode.classList.remove('field_notvalid');
    this.parentNode.classList.add('field_valid');
  }

  if (this.type === "email" && emailReg.test(this.value)) {
    console.log("Your email is correct!");
  }

  if (this.type === "tel" && !numReg.test(this.value)) {
    console.log("You number is valid!");
  }
};

fields.forEach(function (field) {
  return field.addEventListener('blur', validate);
});