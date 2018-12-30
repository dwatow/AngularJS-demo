import angular from 'angular';
import template from './index.html';

class controller {
  constructor() {}

  $onInit() {
    console.log('$onInit');
  }

  $onChanges(changesObj) {
    console.log('$onChanges');
  }

  $doCheck() {
    console.log('$doCheck');
  }

  $onDestroy() {
    console.log('$onDestroy');
  }
  
  $postLink() {
    console.log('$postLink');
  }
}

export default angular.module('tabArchive', [])
  .component('tabArchive', {
    template,
    controller,
    controllerAs: 'vm',
  }).name;
