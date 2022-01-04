(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/button", "./components/pagination", "./components/table", "./components/buttonGroup", "./components/carouselv1", "./components/tableLocal", "./components/tableRemote"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/button"), require("./components/pagination"), require("./components/table"), require("./components/buttonGroup"), require("./components/carouselv1"), require("./components/tableLocal"), require("./components/tableRemote"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.button, global.pagination, global.table, global.buttonGroup, global.carouselv1, global.tableLocal, global.tableRemote);
    global.undefined = mod.exports;
  }
})(this, function (exports, _button, _pagination, _table, _buttonGroup, _carouselv, _tableLocal, _tableRemote) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Table = exports.TableRemote = exports.TableLocal = exports.CarouselV1 = exports.ButtonGroup = exports.Pagination = exports.Button = undefined;

  var _button2 = _interopRequireDefault(_button);

  var _pagination2 = _interopRequireDefault(_pagination);

  var _table2 = _interopRequireDefault(_table);

  var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

  var _carouselv2 = _interopRequireDefault(_carouselv);

  var _tableLocal2 = _interopRequireDefault(_tableLocal);

  var _tableRemote2 = _interopRequireDefault(_tableRemote);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Button = _button2.default;
  exports.Pagination = _pagination2.default;
  exports.ButtonGroup = _buttonGroup2.default;
  exports.CarouselV1 = _carouselv2.default;
  exports.TableLocal = _tableLocal2.default;
  exports.TableRemote = _tableRemote2.default;
  exports.Table = _table2.default;
});
//# sourceMappingURL=index.js.map