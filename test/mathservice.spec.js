import angular from 'angular';
import 'angular-mocks';

import mathservice from '../src/service/mathmodule.js';
import helloWorld from '../src/components/HelloWorld/index.js';
import { createTestApp } from 'angularjs-jest';

describe('helloWorld - component', function () {
  const getTestApp = () => createTestApp({
    modules: [helloWorld, mathservice],
    access: ['$componentController'],
  });

  it('initial is exist', () => {
    const app = getTestApp();
    const sut = app.$componentController(helloWorld);
    expect(sut).toBeDefined();
  });
  
  it('initial binding msg: should be Welcome to Your AngularJS App', () => {
    const app = getTestApp();
    const sut = app.$componentController(helloWorld, null, {
      msg: "Welcome to Your AngularJS App",
    });
    expect(sut.msg).toEqual("Welcome to Your AngularJS App");
  });
  
  it('should go', () => {
    const app = getTestApp();
    const sut = app.$componentController(helloWorld);
    sut.$onInit();
    expect(sut.math).toEqual(3);
  });
})
