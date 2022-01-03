import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// @ts-ignore
import { Table } from 'antd';
import React from "react";
import TableWrapper from './style';

const BaseTable = props => {
  return /*#__PURE__*/React.createElement(TableWrapper, null, /*#__PURE__*/React.createElement(Table, _extends({
    "data-testid": "table-com"
  }, props)));
};

BaseTable.propTypes = {
  height: _pt.string
};
export default BaseTable;
//# sourceMappingURL=index.js.map