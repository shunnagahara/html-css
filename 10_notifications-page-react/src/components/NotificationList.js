import React from 'react';
import { Stack } from '@mui/material';
import Notification from './Notification';

export default function NotificationList({ notifications }) {
  return (
    <Stack spacing={1.6} data-component="NotificationList">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          actorName={notification.actorName}
          actorAvatar={notification.actorAvatar}
          action={notification.action}
          target={notification.target}
          timeAgo={notification.timeAgo}
          image={notification.image}
          imageAlt={notification.imageAlt}
          isUnread={notification.isUnread}
          privateMessage={notification.privateMessage}
        />
      ))}
    </Stack>
  );
}
