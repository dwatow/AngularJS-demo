import angular from 'angular';
import 'angular-mocks';

import mathservice from '../src/service/mathmodule.js';
import helloWorld from '../src/components/HelloWorld/index.js';
import { createTestApp } from 'angularjs-jest';
import cheerio from 'cheerio';

describe('component: HelloWorld', function () {
  const getTestApp = () => createTestApp({
    modules: [helloWorld, mathservice],
    access: ['$componentController', '$compile'],
  });

  let app = null;
  beforeEach(() => {
    app = getTestApp();

  })

  it('initial component is exist', () => {
    const vm = app.$componentController(helloWorld);
    expect(vm).toBeDefined();
  });

  it('initial render binding msg: should be Welcome to Your AngularJS App', () => {
    // const app = getTestApp();
    const element = app.render(`<hello-world msg="'Welcome to Your AngularJS App'"></hello-world>`)
    const $ = cheerio.load(element.html())
    expect($('h1').text()).toBe("Welcome to Your AngularJS App");

    const vm = app.$componentController(helloWorld, null, {
      msg: "Welcome to Your AngularJS App",
    });
    expect(vm.msg).toEqual("Welcome to Your AngularJS App");
  });

  it('initial render service data', () => {
    // const app = getTestApp();
    const element = app.render(`<hello-world msg="'Welcome to Your AngularJS App'"></hello-world>`)
    const $ = cheerio.load(element.html())
    expect($('.math').text()).toBe("3");

    const vm = app.$componentController(helloWorld);
    vm.$onInit();
    expect(vm.math).toBe(3);
  });

  it('hello world click button change text to Chris', () => {
    const vm = app.$componentController(helloWorld, null, {
      msg: "Welcome to Your AngularJS App",
    });

    expect(vm.msg).toBe("Welcome to Your AngularJS App");

    vm.changeHead('Chris')
    expect(vm.msg).toBe("Chris");
  });
})
