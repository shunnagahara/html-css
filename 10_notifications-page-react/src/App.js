import {
  ThemeProvider,
  CssBaseline,
  Box,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import { theme } from './theme';
import './App.css';
import NotificationList from './components/NotificationList';
import { notifications } from './data/notifications';

function App() {
  const unreadCount = notifications.filter(
    (notification) => notification.isUnread
  ).length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        data-component="AppRoot"
        sx={(theme) => ({
          minHeight: '100vh',
          padding: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
            display: 'flex',
            justifyContent: 'center',
          },
          [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.navy[50],
          },
        })}
      >
        <Box
          data-component="NotificationsPanel"
          sx={(theme) => ({
            width: '100%',
            maxWidth: 600,
            margin: '0 auto',
            backgroundColor: theme.palette.common.white,
            borderRadius: '1.6rem',
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(4),
              maxWidth: 730,
            },
            [theme.breakpoints.up('md')]: {
              boxShadow: '0 0.2rem 1.6rem rgba(28, 32, 43, 0.1)',
            },
          })}
        >
          <Stack spacing={3}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              data-component="NotificationsHeader"
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  component="h1"
                  data-component="NotificationsTitle"
                  sx={(theme) => ({
                    ...theme.typography.preset1,
                    margin: 0,
                    color: theme.palette.navy[950],
                  })}
                >
                  Notifications
                </Typography>
                <Box
                  component="span"
                  data-component="NotificationsBadge"
                  sx={(theme) => ({
                    minWidth: 32,
                    padding: '0.2rem 1rem',
                    borderRadius: '0.6rem',
                    textAlign: 'center',
                    backgroundColor: theme.palette.blue[950],
                    color: theme.palette.common.white,
                    ...theme.typography.preset3_bold,
                  })}
                >
                  {unreadCount}
                </Box>
              </Stack>

              <Button
                variant="text"
                data-component="NotificationsMarkAllButton"
                sx={(theme) => ({
                  ...theme.typography.preset4_medium,
                  textTransform: 'none',
                  color: theme.palette.grey[600],
                  padding: 0,
                  minWidth: 'auto',
                })}
              >
                Mark all as read
              </Button>
            </Stack>

            <NotificationList notifications={notifications} />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
