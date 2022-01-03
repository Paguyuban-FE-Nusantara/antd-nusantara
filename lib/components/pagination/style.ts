import styled from 'styled-components';

const PaginationWrapper = styled.div`
  button {
    background-color: ${(props) => props.theme.palette.grayscale[8]};
  }
  .ant-btn-icon-only > * {
    font-size: 14px;
  }
`;

export default PaginationWrapper;
