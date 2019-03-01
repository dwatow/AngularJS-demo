import angular from "angular";
import template from "./index.html";
import "./index.css";

class controller {
  constructor($log, ItemService) {
    this.$log = $log;
    this.ItemService = ItemService;

    this.$log.log("$log: hi");
  }

  $onInit() {
    this.$log.log(this.msg);
    this.ItemService.getD();
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
