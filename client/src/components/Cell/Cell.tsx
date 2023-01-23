import { TableCell } from "@mui/material";
import * as styles from "./styles";

interface CellProps {
  children: React.ReactNode;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'
}
export const Cell = (props: CellProps) => {
  const { children, status } = props;

  return (
    <TableCell
      align="center"
      color="primary"
      className={`${status}`}
      sx={styles.tableCell}
    >
      {children}
    </TableCell>
  );
}