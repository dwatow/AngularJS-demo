import angular from 'angular';
import template from './index.html';

class controller {
  constructor() {
    console.error('tabHome: ', 'constructor');
  }

  $onInit() {
    console.error('tabHome: ', '$onInit');
  }

  $onChanges(changesObj) {
    console.error('tabHome: ', '$onChanges');
  }

  $doCheck() {
    console.error('tabHome: ', '$doCheck');
  }

  $onDestroy() {
    console.error('tabHome: ', '$onDestroy');
  }

  $postLink() {
    console.error('tabHome: ', '$postLink');
  }
}

export default angular.module('tabHome', [])
  .component('tabHome', {
    template,
    controller,
    controllerAs: 'vm',
  }).name;
