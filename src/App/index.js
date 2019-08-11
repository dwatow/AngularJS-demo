import angular from "angular";
import HelloWorld from "@/components/HelloWorld";
import template from "./index.html";
import "./index.css";

class controller {
  constructor() {}
}

export default angular.module("app", [HelloWorld]).component("app", {
  template,
  controller,
  controllerAs: "vm",
}).name;
