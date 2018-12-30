import angular from 'angular';
import Tabs from '@/components/Tabs';
import template from './index.html';
import './index.css';


class controller {
  constructor() {
    // console.log('constructor');
  }
}

export default angular.module('app', [Tabs])
  .component('app', {
    template,
    controller,
    controllerAs: 'vm',
  }).name;
