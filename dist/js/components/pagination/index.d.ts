import { FC } from 'react';
export interface IPaginationProps {
    onPageChange: Function;
    currentPage: number;
    pageSize: number;
    totalCount: number;
    className?: string;
}
declare const BasePagination: FC<IPaginationProps>;
export default BasePagination;
