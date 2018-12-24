import angular from 'angular';

class controller{
  constructor() {
    console.log('constructor');
  }
}

angular.module('MainApp', [])

angular.module('app', [])
  .component('main', {
    template: `<div>Hello AngularJS</div>`,
    controller,
    controllerAs: 'vm',
  }).name;
