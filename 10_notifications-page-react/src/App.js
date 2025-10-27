import { ThemeProvider, CssBaseline, Box, Stack } from '@mui/material';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import { theme } from './theme';
import './App.css';
import NotificationList from './components/NotificationList';
import { notifications } from './data/notifications';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(notifications);

  const unreadCount = items.filter(
    (notification) => notification.isUnread
  ).length;

  const handleMarkAllAsRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  };

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
          <Stack spacing={3}>
            <Header
              unreadCount={unreadCount}
              onMarkAllAsRead={handleMarkAllAsRead}
            />
            <NotificationList notifications={items} />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
