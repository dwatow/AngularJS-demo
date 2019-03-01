import angular from "angular";

class service {
  constructor($log) {
    this.d = 3;
    $log.log("this is service");
  }

  getD() {
    return this.d;
  }
}

export default angular.module("ItemService", []).factory("ItemService", service)
  .name;
