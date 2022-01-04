import { FC } from 'react';
import * as React from "react"
import { Radio, RadioProps } from 'antd';
import ButtonGroupWrapper from './style';

export interface Group {
  label: string;
  value: string | number;
}

type Groups = Group[];

export interface IButtonGroupProps extends RadioProps {
  color?: 'secondary' | 'primary' | undefined;
  groups: Groups;
}

const ButtonGroup: FC<IButtonGroupProps> = ({ color, groups, ...rest }) => {
  return (
    <ButtonGroupWrapper color={color}>
      <Radio.Group {...rest}>
        {groups.map((row) => (
          <Radio.Button value={row.value}>{row.label}</Radio.Button>
        ))}
      </Radio.Group>
    </ButtonGroupWrapper>
  );
};

export default ButtonGroup;
