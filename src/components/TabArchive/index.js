import angular from 'angular';
import template from './index.html';

class controller {
  constructor() {}

  $onInit() {
    console.log('tabArchive: ', '$onInit');
  }

  $onChanges(changesObj) {
    console.log('tabArchive: ', '$onChanges');
  }

  $doCheck() {
    console.log('tabArchive: ', '$doCheck');
  }

  $onDestroy() {
    console.log('tabArchive: ', '$onDestroy');
  }

  $postLink() {
    console.log('tabArchive: ', '$postLink');
  }
}

export default angular.module('tabArchive', [])
  .component('tabArchive', {
    template,
    controller,
    controllerAs: 'vm',
  }).name;
