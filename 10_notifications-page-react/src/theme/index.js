import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export const theme = createTheme({
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: '0.8rem',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 0.2rem 1.6rem rgba(28, 32, 43, 0.1)',
          borderRadius: '1.6rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: '1.6rem',
        },
        html: {
          fontSize: '62.5%',
        },
      },
    },
  },
  htmlFontSize: 10,
  palette,
  typography,
});
