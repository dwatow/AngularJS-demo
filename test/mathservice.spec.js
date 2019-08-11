import angular from 'angular';
import 'angular-mocks';

import mathservice from '../src/service/mathmodule.js';
import helloWorld from '../src/components/HelloWorld/index.js';

beforeEach(() => {
  angular.mock.module(mathservice);
  angular.mock.module(helloWorld);
});


var __$componentController__  = null;
beforeEach(inject(($log, mathservice, $componentController) => {
  __$componentController__ = $componentController;
}))

describe('helloWorld - component', function () {
  it('initial is exist', () => {
    const sut = __$componentController__(helloWorld)
    expect(sut).toBeDefined();
  });

  it('initial binding msg: should be Welcome to Your AngularJS App', () => {
    const sut = __$componentController__(helloWorld, null, {
      msg: "Welcome to Your AngularJS App",
    })
    expect(sut.msg).toEqual("Welcome to Your AngularJS App");
  });
  
  it('should go', () => {
    const sut = __$componentController__(helloWorld);
    sut.$onInit();
    expect(sut.math).toEqual(3);
  });
})
