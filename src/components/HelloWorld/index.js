import angular from "angular";
import template from "./index.html";

import "./index.css";

class controller {
  constructor($log, mathservice) {
    this.$log = $log;
    this.mathservice = mathservice;

    this.$log.log("$log: hi");
  }

  $onInit() {
    this.math = this.mathservice.addTwoNumbers(1, 2);
    this.$log.log(this.msg);
  }

  changeHead(msg) {
    this.msg = msg;
  }
}

export default angular.module("helloWorld", []).component("helloWorld", {
  template,
  controller,
  bindings: {
    msg: "<",
  },
  controllerAs: "vm",
}).name;
