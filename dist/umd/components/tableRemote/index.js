(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "antd", "./style", "../table", "../pagination", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("antd"), require("./style"), require("../table"), require("../pagination"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.antd, global.style, global.table, global.pagination, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _antd, _style, _table, _pagination, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _style2 = _interopRequireDefault(_style);

  var _table2 = _interopRequireDefault(_table);

  var _pagination2 = _interopRequireDefault(_pagination);

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const _excluded = ["dataSource", "columns", "onPageChange", "onSizeChange", "infoPaging", "withNumber", "showPagination"];

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  const {
    Option
  } = _antd.Select;

  const TableRemote = props => {
    const {
      dataSource = [],
      columns = [],
      onPageChange,
      onSizeChange = () => {},
      infoPaging,
      withNumber = false,
      showPagination = true
    } = props,
          rest = _objectWithoutProperties(props, _excluded);

    const total = infoPaging?.total || 0;
    const currentPage = infoPaging?.currentPage || 1;
    const pageSize = infoPaging?.pageSize || 5;
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = currentPage * pageSize;
    const numberColumn = [{
      title: 'No',
      key: 'index',
      render: (value, item, index) => (currentPage - 1) * pageSize + (index + 1)
    }];
    return /*#__PURE__*/React.createElement(_style2.default, null, /*#__PURE__*/React.createElement(_antd.Row, null, /*#__PURE__*/React.createElement(_antd.Col, {
      span: 24
    }, /*#__PURE__*/React.createElement(_table2.default, _extends({
      rowClassName: (record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark',
      dataSource: dataSource,
      pagination: false,
      columns: withNumber ? [...numberColumn, ...columns] : columns
    }, rest)))), showPagination !== false && /*#__PURE__*/React.createElement(_antd.Space, {
      size: 24,
      className: "action-bottom"
    }, /*#__PURE__*/React.createElement("div", null, "Baris per halaman"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_antd.Select, {
      className: "select-size",
      value: pageSize,
      onChange: onSizeChange
    }, /*#__PURE__*/React.createElement(Option, {
      value: 5
    }, "5"), /*#__PURE__*/React.createElement(Option, {
      value: 10
    }, "10"), /*#__PURE__*/React.createElement(Option, {
      value: 20
    }, "20"))), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, startItem, " - ", endItem, " dari ", total), /*#__PURE__*/React.createElement(_pagination2.default, {
      className: "pagination-bar",
      currentPage: currentPage,
      totalCount: total,
      pageSize: pageSize,
      onPageChange: onPageChange
    })));
  };

  TableRemote.propTypes = {
    orderingNumber: _propTypes2.default.number,
    withNumber: _propTypes2.default.bool,
    showPagination: _propTypes2.default.bool
  };
  exports.default = TableRemote;
});
//# sourceMappingURL=index.js.map