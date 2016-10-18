import $ from 'jquery';
import Backbone from 'backbone';
import chai from 'chai';

let expect = chai.expect;

import Router from '../src/app/router';


describe('Integration tests', function() {
  const router = new Router();
  Backbone.history.start();

  let $app = $('#bh-app');


  describe('Login page sample testing', function() {
    let $loginText = $('.loginPage__title');
    it('should render Login on first render', function() {
      expect($loginText.text()).to.equal('Login!');
    });
  });

  describe('Dashboard page sample testing', function() {
    it('should render Dashboard', function() {
      router.navigate('dashboard', {trigger: true, replace: true});

      expect($app.text()).to.equal('Dashboard!');
    });
  });

});