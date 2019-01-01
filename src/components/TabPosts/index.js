import angular from 'angular';
import template from './index.html';
import TabArchive from '@/components/TabArchive';

class controller {
  constructor() {
    console.warn('tabPosts: ', 'constructor');
  }

  $onInit() {
    console.warn('tabPosts: ', '$onInit');
  }

  $onChanges(changesObj) {
    console.warn('tabPosts: ', '$onChanges');
  }

  $doCheck() {
    console.warn('tabPosts: ', '$doCheck');
  }

  $onDestroy() {
    console.warn('tabPosts: ', '$onDestroy');
  }

  $postLink() {
    console.warn('tabPosts: ', '$postLink');
  }
}

export default angular.module('tabPosts', [TabArchive])
  .component('tabPosts', {
    template,
    controller,
    controllerAs: 'vm',
    transclude: true,
  }).name;
