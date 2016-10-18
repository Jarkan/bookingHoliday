import LoginModel from './login.model';
import Mn from 'backbone.marionette';

import router from '../../router';

import template from './template.hbs';

export default Mn.ItemView.extend({
  model: new LoginModel(),
  template: template,
  ui: {
    button: '.sign-in-button',
    emailInput: '.email-input',
    passwordInput: '.password-input',
    errors: '.errors'
  },

  events: {
    'click @ui.button': 'signInButton'
  },

  signInButton: function() {
    console.log(this.ui.emailInput.val(), this.ui.passwordInput.val())
    this.model.set({
      email: this.ui.emailInput.val(),
      password: this.ui.passwordInput.val()
    });
    if (this.model.isValid()) {
      alert('Good Credentials');
    }else{
      
    }

  },

  serializeData() {
    return {
      page: 'Login'
    };
  }

});
