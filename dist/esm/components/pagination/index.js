import _pt from "prop-types";
import React from 'react';
import { Col, Row, Button } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import PaginationWrapper from './style';

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

  return /*#__PURE__*/React.createElement(PaginationWrapper, {
    className: className
  }, /*#__PURE__*/React.createElement(Row, {
    justify: "end",
    gutter: 8
  }, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/React.createElement(DoubleLeftOutlined, null),
    onClick: onFirst,
    disabled: currentPage === 1 || totalCount === 0
  })), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/React.createElement(LeftOutlined, null),
    onClick: onPrevious,
    disabled: currentPage === 1 || totalCount === 0
  })), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/React.createElement(RightOutlined, null),
    onClick: onNext,
    disabled: currentPage === lastPage || totalCount === 0
  })), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    type: "text",
    shape: "circle",
    icon: /*#__PURE__*/React.createElement(DoubleRightOutlined, null),
    onClick: onLast,
    disabled: currentPage === lastPage || totalCount === 0
  }))));
};

BasePagination.propTypes = {
  currentPage: _pt.number.isRequired,
  pageSize: _pt.number.isRequired,
  totalCount: _pt.number.isRequired,
  className: _pt.string
};
export default BasePagination;
//# sourceMappingURL=index.js.map