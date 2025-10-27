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
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(4),
              maxWidth: 730,
            },
            [theme.breakpoints.up('md')]: {
              borderRadius: '1.6rem',
              boxShadow: '0 0.2rem 1.6rem rgba(28, 32, 43, 0.1)',
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
