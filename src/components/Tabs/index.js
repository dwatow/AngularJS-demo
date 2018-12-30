import angular from 'angular';
import template from './index.html';
import './index.css';

import TabHome from '@/components/TabHome';
import TabPosts from '@/components/TabPosts';
import TabArchive from '@/components/TabArchive';

class controller {
  constructor() {}

  $onInit() {
    this.currentTab = 'Home';
    this.tabs = ['Home', 'Posts', 'Archive'];
    // this.text = 'hello vue.js';
    // this.message = 'message is here';
  }

  $doCheck() {
    this.currentTabComponent = this.computedCurrentTabComponent();
  }

  isCurrTabIsMe(targetTabName) {
    // console.log(this.currentTabComponent, targetTabName);
    return this.currentTabComponent === targetTabName
  }

  computedCurrentTabComponent() {
    // console.log('tab-' + this.currentTab.toLowerCase());
    return 'tab-' + this.currentTab.toLowerCase()
  }
}

export default angular.module('tabs', [TabHome, TabPosts, TabArchive])
  .component('tabs', {
    template,
    controller,
    controllerAs: 'vm',
  }).name;
