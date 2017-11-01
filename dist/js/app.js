'use strict';

var field = document.querySelector('.field input');

field.addEventListener('change', function () {
  if (this.value.length < 1) {
    this.parentNode.classList.add('field_notvalid');
    var curError = this.querySelector('.field__error');
    curError.classList.add('show');
  }
});