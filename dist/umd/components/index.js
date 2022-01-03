(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./button", "./table", "./pagination"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./button"), require("./table"), require("./pagination"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button, global.table, global.pagination);
    global.undefined = mod.exports;
  }
})(this, function (exports, _button, _table, _pagination) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_button).default;
    }
  });
  Object.defineProperty(exports, "Table", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_table).default;
    }
  });
  Object.defineProperty(exports, "Pagination", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_pagination).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index.js.map