import { ButtonProps } from 'antd/lib/button';
import { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const ButtonWrapper: FC<ButtonProps> = styled(Button)`
  ${(props) => {
    switch (props.color) {
        case 'primary':
            return /*css*/ `
            &.ant-btn-primary{
                background-color:  ${props.theme.palette.primary[1]};
                color: white;
            }
        `;
        case 'secondary':
            return /*css*/ `
            color: ${props.theme.palette.primary[2]};
            border-color:  ${props.theme.palette.primary[2]};
            &:hover{
                border-color:  ${props.theme.palette.primary[2]};
                color: ${props.theme.palette.primary[2]};
            }
            &.ant-btn-primary{
                background-color:  ${props.theme.palette.primary[2]};
                border-color:  ${props.theme.palette.primary[2]};
                color: white;
                &:hover {
                    background-color:  ${props.theme.palette.primary[1]};
                    border-color:  ${props.theme.palette.primary[2]};
                }
            }
            &.ant-btn-text{
              border-color: transparent;
            }
            &.ant-btn-link{
              border-color: transparent;
            }
        `;
        default:
            return ``;
    }
}}
`;

export default ButtonWrapper;
