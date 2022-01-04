/// <reference types="react" />
import { TableProps } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { IInfoPaging } from "../../interface";
interface ITableRemoteProps<T extends object> extends TableProps<T> {
    orderingNumber?: number;
    withNumber?: boolean;
    infoPaging?: IInfoPaging;
    onPageChange: Function;
    onSizeChange: ((value: number, option: DefaultOptionType | DefaultOptionType[]) => void) | undefined;
    showPagination?: boolean;
}
declare const TableRemote: <T extends object = object>(props: ITableRemoteProps<T>) => JSX.Element;
export default TableRemote;
