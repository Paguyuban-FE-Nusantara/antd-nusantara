import styled from 'styled-components';
const TableWrapper = styled.div`
  .ant-table-thead > tr > th {
    background: ${props => props.theme.palette.grayscale[8]};
  }
  .action-bottom {
    line-height: 30px;
  }
  .table-row-light {
    background-color: ${props => props.theme.palette.grayscale[9]};
  }
  .table-row-dark {
    background-color: ${props => props.theme.palette.grayscale[8]};
  }
  .select-size {
    .ant-select-selector {
      border-color: transparent;
    }
  }
  .action-bottom {
    margin-top: 1rem;
  }
`;
export default TableWrapper;
//# sourceMappingURL=style.js.map