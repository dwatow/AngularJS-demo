import angular from "angular";
import HelloWorld from "@/components/HelloWorld";
import template from "./index.html";
import "./index.css";

class controller {
  constructor(ItemService) {
    console.log("constructor", ItemService); // eslint-disable-line
  }
}

export default angular.module("app", [HelloWorld]).component("app", {
  template,
  controller,
  controllerAs: "vm",
}).name;
