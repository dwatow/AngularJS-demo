import angular from 'angular';

class controller {
  constructor() {
    console.log('constructor');
  }
}

export default angular.module('main', [])
  .component('main', {
    template: `<div>Hello AngularJS</div>`,
    controller,
    controllerAs: 'vm',
  }).name;

controller.$inject = []
