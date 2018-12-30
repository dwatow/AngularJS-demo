import angular from 'angular';
import template from './index.html';

class controller {
  constructor() {
    console.warn('tabPosts: ', 'constructor', document.querySelector('#posts'));
  }

  $onInit() {
    console.warn('tabPosts: ', '$onInit', document.querySelector('#posts'));
  }

  $onChanges(changesObj) {
    console.warn('tabPosts: ', '$onChanges', document.querySelector('#posts'));
  }

  $doCheck() {
    console.warn('tabPosts: ', '$doCheck', document.querySelector('#posts'));
  }

  $onDestroy() {
    console.warn('tabPosts: ', '$onDestroy');
  }

  $postLink() {
    console.warn('tabPosts: ', '$postLink', document.querySelector('#posts'));
  }
}

export default angular.module('tabPosts', [])
  .component('tabPosts', {
    template,
    controller,
    controllerAs: 'vm',
  }).name;
