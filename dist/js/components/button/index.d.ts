import { FC } from 'react';
import { ButtonProps } from 'antd/lib/button';
interface MyButtonProps extends ButtonProps {
    color?: 'secondary' | 'primary';
}
declare const BaseButton: FC<MyButtonProps>;
export default BaseButton;
