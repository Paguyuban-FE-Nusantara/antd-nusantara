import React,{ FC } from 'react';
import { ButtonProps } from 'antd/lib/button';
import ButtonWrapper from './style';

interface MyButtonProps extends ButtonProps {
    color?: 'secondary' | 'primary';
}

const BaseButton: FC<MyButtonProps> = (props) => {
    const { color } = props;
    return <ButtonWrapper color={color} data-testid="required-button" {...props} />;
};

export default BaseButton;
