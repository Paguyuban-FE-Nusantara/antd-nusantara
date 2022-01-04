import { FC } from 'react';
import { RadioProps } from 'antd';
export interface Group {
    label: string;
    value: string | number;
}
declare type Groups = Group[];
export interface IButtonGroupProps extends RadioProps {
    color?: 'secondary' | 'primary' | undefined;
    groups: Groups;
}
declare const ButtonGroup: FC<IButtonGroupProps>;
export default ButtonGroup;
