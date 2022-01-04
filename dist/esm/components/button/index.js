import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import ButtonWrapper from './style';

const BaseButton = props => {
  const {
    color
  } = props;
  return /*#__PURE__*/React.createElement(ButtonWrapper, _extends({
    color: color,
    "data-testid": "required-button"
  }, props));
};

BaseButton.propTypes = {
  color: _pt.oneOf(['secondary', 'primary'])
};
export default BaseButton;
//# sourceMappingURL=index.js.map