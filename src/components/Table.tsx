import { Link, type LinkProps } from "react-router-dom";
import styled from "styled-components";

const TableComponent = styled.table`
  width: 100%;
  border-color: inherit;
  border-collapse: collapse;
`;

TableComponent.displayName = "Table";

const TableHead = styled.thead``;

TableHead.displayName = "TableHead";

const TableBody = styled.tbody``;

TableBody.displayName = "TableBody";

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  &:hover {
    background-color: #f4f4f580;
  }
`;

TableRow.displayName = "TableRow";

const TableHeader = styled.th`
  font-weight: 500;
  vertical-align: middle;
  color: #71717a;
  text-align: left;
  padding-right: 8px;
  padding-left: 8px;
  height: 40px;
`;

TableHeader.displayName = "TableHeader";

const TableCell = styled.td`
  font-weight: 500;
  vertical-align: middle;
  padding: 8px;
`;

TableCell.displayName = "TableCell";

const TableLinkCellWrapper = styled(TableCell)`
  padding: 0;

  & > a {
    display: block;
    padding: 8px;
  }
`;

TableLinkCellWrapper.displayName = "TableLinkCellWrapper";

const TableLinkCell: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => (
  <TableLinkCellWrapper>
    <Link {...props}>{children}</Link>
  </TableLinkCellWrapper>
);

TableLinkCell.displayName = "TableLinkCell";

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Header: TableHeader,
  Cell: TableCell,
  LinkCell: TableLinkCell,
});
