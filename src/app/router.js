import $ from 'jquery';
import Backbone from 'backbone';

import DashboardView from './views/dashboard/dashboard';
import LoginView from './views/login/login';


export default Backbone.Router.extend({

  routes: {
    '': 'login',
    'dashboard': 'dashboard'
  },

  initialize() {
    $('body').append('<div id="bh-app"></div>');
  },

  dashboard() {
    var dashboardView = new DashboardView().render();

    $('#bh-app').empty().append(dashboardView.$el);
  },

  login() {
    var loginView = new LoginView().render();

    $('#bh-app').empty().append(loginView.$el);
  }

});
