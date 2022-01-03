(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.components);
    global.undefined = mod.exports;
  }
})(this, function (exports, _components) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    Button: _components.Button,
    Pagination: _components.Pagination,
    Table: _components.Table
  };
});
//# sourceMappingURL=index.js.map