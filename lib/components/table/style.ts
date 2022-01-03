import styled from 'styled-components';

const TableWrapper = styled.div`
  .ant-table-thead > tr > th {
    background: ${(props) => props.theme.palette.grayscale[8]};
  }
`;

export default TableWrapper;
