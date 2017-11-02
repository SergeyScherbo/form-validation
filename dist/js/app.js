'use strict';

var field = document.querySelectorAll('.field input');

for (var i = 0; i < field.length; i++) {
  field[i].addEventListener('blur', function (e) {
    if (this.value.length < 1) {
      this.parentNode.classList.remove('field_valid');
      this.parentNode.classList.add('field_notvalid');
    } else {
      this.parentNode.classList.remove('field_notvalid');
      this.parentNode.classList.add('field_valid');
    }
  });
}