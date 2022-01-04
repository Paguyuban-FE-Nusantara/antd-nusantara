import React,{ FC } from 'react';
import { Col, Row, Button } from 'antd';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import PaginationWrapper from './style';

export interface IPaginationProps {
  onPageChange: Function;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  className?: string;
}

const BasePagination: FC<IPaginationProps> = (props) => {
  const { onPageChange, currentPage, pageSize, totalCount, className } = props;
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

  return (
    <PaginationWrapper className={className}>
      <Row justify="end" gutter={8}>
        <Col>
          <Button
            type="text"
            shape="circle"
            icon={<DoubleLeftOutlined />}
            onClick={onFirst}
            disabled={currentPage === 1 || totalCount === 0}
          />
        </Col>
        <Col>
          <Button
            type="text"
            shape="circle"
            icon={<LeftOutlined />}
            onClick={onPrevious}
            disabled={currentPage === 1 || totalCount === 0}
          />
        </Col>
        <Col>
          <Button
            type="text"
            shape="circle"
            icon={<RightOutlined />}
            onClick={onNext}
            disabled={currentPage === lastPage || totalCount === 0}
          />
        </Col>
        <Col>
          <Button
            type="text"
            shape="circle"
            icon={<DoubleRightOutlined />}
            onClick={onLast}
            disabled={currentPage === lastPage || totalCount === 0}
          />
        </Col>
      </Row>
    </PaginationWrapper>
  );
};

export default BasePagination;
