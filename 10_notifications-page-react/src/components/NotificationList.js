import React from 'react';
import { Stack } from '@mui/material';
import Notification from './Notification';

export default function NotificationList({ notifications }) {
  return (
    <Stack spacing={1.6} data-component="NotificationList">
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </Stack>
  );
}
