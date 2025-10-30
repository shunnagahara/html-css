import {
  ThemeProvider,
  CssBaseline,
  Box,
  Stack,
  CircularProgress,
  Alert,
} from '@mui/material';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import { theme } from './theme';
import './App.css';
import NotificationList from './components/NotificationList';
import Header from './components/Header';
import { useNotifications } from './hooks/useNotifications';

function App() {
  const { error, isLoading, markAllAsRead, notifications, unreadCount } =
    useNotifications();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        data-component="AppRoot"
        sx={(theme) => ({
          padding: theme.spacing(2),
          [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.navy[50],
          },
          [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            padding: theme.spacing(4),
          },
        })}
      >
        <Box
          data-component="NotificationsPanel"
          sx={(theme) => ({
            maxWidth: 600,
            width: '100%',
            margin: '0 auto',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.common.white,
            [theme.breakpoints.up('md')]: {
              boxShadow: '0 0.2rem 1.6rem rgba(28, 32, 43, 0.1)',
              borderRadius: '1.6rem',
            },
            [theme.breakpoints.up('sm')]: {
              maxWidth: 730,
              padding: theme.spacing(4),
            },
          })}
        >
          {isLoading ? (
            <Stack
              alignItems="center"
              justifyContent="center"
              data-component="NotificationsLoading"
              sx={{ minHeight: 240 }}
            >
              <CircularProgress />
            </Stack>
          ) : error ? (
            <Alert severity="error" data-component="NotificationsError">
              {error.message}
            </Alert>
          ) : (
            <Stack spacing={3}>
              <Header
                unreadCount={unreadCount}
                onMarkAllAsRead={markAllAsRead}
              />
              <NotificationList notifications={notifications} />
            </Stack>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
