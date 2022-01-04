import _pt from "prop-types";
const _excluded = ["color", "groups"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import { Radio } from 'antd';
import ButtonGroupWrapper from './style';

const ButtonGroup = _ref => {
  let {
    color,
    groups
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ButtonGroupWrapper, {
    color: color
  }, /*#__PURE__*/React.createElement(Radio.Group, rest, groups.map(row => /*#__PURE__*/React.createElement(Radio.Button, {
    value: row.value
  }, row.label))));
};

ButtonGroup.propTypes = {
  groups: _pt.arrayOf(_pt.shape({
    label: _pt.string.isRequired,
    value: _pt.oneOfType([_pt.string, _pt.number]).isRequired
  })).isRequired
};
export default ButtonGroup;
//# sourceMappingURL=index.js.map