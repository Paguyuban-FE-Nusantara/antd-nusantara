(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "antd", "@ant-design/icons", "./style"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("antd"), require("@ant-design/icons"), require("./style"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.antd, global.icons, global.style);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _antd, _icons, _style) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _style2 = _interopRequireDefault(_style);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const BasePagination = props => {
    const {
      onPageChange,
      currentPage,
      pageSize,
      totalCount,
      className
    } = props;

    if (currentPage === 0) {
      return null;
    }

    const lastPage = Math.ceil(totalCount / pageSize);

    const onNext = () => {
      onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
      onPageChange(currentPage - 1);
    };

    const onFirst = () => {
      onPageChange(1);
    };

    const onLast = () => {
      onPageChange(lastPage);
    };

    return /*#__PURE__*/_react2.default.createElement(_style2.default, {
      className: className
    }, /*#__PURE__*/_react2.default.createElement(_antd.Row, {
      justify: "end",
      gutter: 8
    }, /*#__PURE__*/_react2.default.createElement(_antd.Col, null, /*#__PURE__*/_react2.default.createElement(_antd.Button, {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/_react2.default.createElement(_icons.DoubleLeftOutlined, null),
      onClick: onFirst,
      disabled: currentPage === 1 || totalCount === 0
    })), /*#__PURE__*/_react2.default.createElement(_antd.Col, null, /*#__PURE__*/_react2.default.createElement(_antd.Button, {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/_react2.default.createElement(_icons.LeftOutlined, null),
      onClick: onPrevious,
      disabled: currentPage === 1 || totalCount === 0
    })), /*#__PURE__*/_react2.default.createElement(_antd.Col, null, /*#__PURE__*/_react2.default.createElement(_antd.Button, {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/_react2.default.createElement(_icons.RightOutlined, null),
      onClick: onNext,
      disabled: currentPage === lastPage || totalCount === 0
    })), /*#__PURE__*/_react2.default.createElement(_antd.Col, null, /*#__PURE__*/_react2.default.createElement(_antd.Button, {
      type: "text",
      shape: "circle",
      icon: /*#__PURE__*/_react2.default.createElement(_icons.DoubleRightOutlined, null),
      onClick: onLast,
      disabled: currentPage === lastPage || totalCount === 0
    }))));
  };

  BasePagination.propTypes = {
    currentPage: _propTypes2.default.number.isRequired,
    pageSize: _propTypes2.default.number.isRequired,
    totalCount: _propTypes2.default.number.isRequired,
    className: _propTypes2.default.string
  };
  exports.default = BasePagination;
});
//# sourceMappingURL=index.js.map