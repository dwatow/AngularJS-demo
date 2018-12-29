import angular from 'angular';
import template from './index.html';
import './index.css';

class controller{
  constructor () {
    console.log('hi')
  }

  $onInit () {
    console.log(this.msg);
  }
}

export default angular.module('helloWorld', [])
.component('helloWorld', {
  template,
  controller,
  bindings: {
    msg: '<',
  },
  controllerAs: 'vm',
}).name;
