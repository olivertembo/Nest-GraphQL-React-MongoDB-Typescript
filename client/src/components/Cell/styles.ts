import { SxProps, Theme } from '@mui/system';
import { TableCell } from '@mui/material';
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const tableCell: SxProps<Theme> = (theme) => ({
  border: '1px solid #000',
  padding: '0',
  width: '20%',
  height: { xs: '65px', sm: '100px', md: '100px' },
  fontSize: { xs: '0.5rem', sm: '1rem',  },
  cursor: "pointer",
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  "&.selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  "&.winning-cell": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
});