/// <reference types="react" />
import { TableProps } from 'antd';
interface MyTableProps<T extends object> extends TableProps<T> {
    height?: string;
}
declare const BaseTable: <T extends object = object>(props: MyTableProps<T>) => JSX.Element;
export default BaseTable;
