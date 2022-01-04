/// <reference types="react" />
import { TableProps } from 'antd';
export interface ITableLocalProps<T extends object> extends TableProps<T> {
    orderingNumber?: number;
    withNumber?: boolean;
}
declare const TableLocal: <T extends object = object>(props: ITableLocalProps<T>) => JSX.Element;
export default TableLocal;
