import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
export default function Header({ onMarkAllAsRead, unreadCount }) {
  return (
    <Box
      data-component="NotificationsHeader"
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(3),
        borderRadius: '0.8rem',
        paddingX: theme.spacing(3),
      })}
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
            padding: '0.2rem 1rem',
            backgroundColor: theme.palette.blue[950],
            color: theme.palette.common.white,
            borderRadius: '0.6rem',
            minWidth: 32,
            textAlign: 'center',
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
          padding: 0,
          color: theme.palette.grey[600],
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.blue[950],
          },
          minWidth: 'auto',
          textTransform: 'none',
        })}
        onClick={onMarkAllAsRead}
      >
        Mark all as read
      </Button>
    </Box>
  );
}
