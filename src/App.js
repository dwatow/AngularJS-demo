import angular from 'angular';

class controller {
  constructor() {
    console.log('constructor');
  }
}

export default angular.module('app', [])
  .component('app', {
    template: `<div>Hello AngularJS</div>`,
    controller,
    controllerAs: 'vm',
  }).name;
