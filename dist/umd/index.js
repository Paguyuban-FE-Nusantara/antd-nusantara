(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/button", "./components/pagination", "./components/table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/button"), require("./components/pagination"), require("./components/table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button, global.pagination, global.table);
    global.undefined = mod.exports;
  }
})(this, function (exports, _button, _pagination, _table) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _button2 = _interopRequireDefault(_button);

  var _pagination2 = _interopRequireDefault(_pagination);

  var _table2 = _interopRequireDefault(_table);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    Button: _button2.default,
    Pagination: _pagination2.default,
    Table: _table2.default
  };
});
//# sourceMappingURL=index.js.map