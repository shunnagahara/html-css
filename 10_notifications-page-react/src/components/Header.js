import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
export default function Header({ unreadCount }) {
  return (
    <Box
      data-component="NotificationsHeader"
      sx={(theme) => ({
        borderRadius: '0.8rem',
        paddingX: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
          '&:hover': {
            color: theme.palette.blue[950],
            backgroundColor: 'transparent',
          },
        })}
      >
        Mark all as read
      </Button>
    </Box>
  );
}
