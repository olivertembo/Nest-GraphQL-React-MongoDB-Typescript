import { SxProps, Theme } from '@mui/system';
import { TableCell } from '@mui/material';
import { styled } from "@mui/material/styles";

export const row: SxProps<Theme> = (theme) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
    "&:last-child td, &:last-child th": {
    border: 0,
  },
  padding: '0',
  fontSize: { xs: '0.5rem', sm: '1rem',  },
});

export const status: SxProps<Theme> = (theme) => ({
  padding: '5px',
  borderRadius: '5px',
  color: theme.palette.common.black,
   "&.OPEN": {
    backgroundColor: '#cbeadc',
  },
  "&.COMPLETE": {
    backgroundColor: '#f5d1d1',
  },
  "&.IN_PROGRESS": {
    backgroundColor: "#ffff99",
  }
});