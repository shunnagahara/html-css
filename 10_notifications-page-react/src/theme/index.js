import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  htmlFontSize: 10,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontSize: '1.6rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.8rem',
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1.6rem',
          boxShadow: '0 0.2rem 1.6rem rgba(28, 32, 43, 0.1)',
        },
      },
    },
  },
});
