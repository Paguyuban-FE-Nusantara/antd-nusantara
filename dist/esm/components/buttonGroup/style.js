import styled from 'styled-components';
const ButtonGroupWrapper = styled.div`
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: ${({
  color,
  theme
}) => color === 'secondary' ? theme.palette.primary[2] : '#101C42'};
    background: #fff;
    border-color: ${({
  color,
  theme
}) => color === 'secondary' ? theme.palette.primary[2] : '#101C42'};
    &:before {
      background-color: ${({
  color,
  theme
}) => color === 'secondary' ? theme.palette.primary[2] : '#101C42'};
    }
  }
`;
export default ButtonGroupWrapper;
//# sourceMappingURL=style.js.map