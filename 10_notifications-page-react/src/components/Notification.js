import React from 'react';
import { Stack } from '@mui/material';
import {
  ActorName,
  NotificationAvatar,
  NotificationBody,
  NotificationImage,
  NotificationMessage,
  NotificationRoot,
  NotificationTime,
  PrivateMessage,
  PrivateMessageText,
  Target,
  UnreadIndicator,
} from './Notification.styles';

export default function Notification({
  action,
  actorAvatar,
  actorName,
  image,
  imageAlt,
  isUnread,
  privateMessage,
  target,
  timeAgo,
}) {
  return (
    <NotificationRoot
      component="article"
      data-component="Notification"
      direction="row"
      spacing={2}
      $isUnread={isUnread}
    >
      <NotificationAvatar
        alt={actorName}
        data-component="NotificationAvatar"
        src={actorAvatar}
      />

      <NotificationBody
        data-component="NotificationBody"
        direction="row"
        spacing={2}
      >
        <Stack spacing={1} flex={1} data-component="NotificationDetails">
          <NotificationMessage
            data-component="NotificationMessage"
            component="p"
          >
            <ActorName component="span">{actorName}</ActorName>
            {action}
            {target ? <Target component="span">{target}</Target> : null}
            {isUnread ? (
              <UnreadIndicator
                aria-label="unread"
                data-component="NotificationUnreadIndicator"
                role="status"
              />
            ) : null}
          </NotificationMessage>

          <NotificationTime
            component="time"
            data-component="NotificationTime"
            dateTime="PT1M"
          >
            {timeAgo}
          </NotificationTime>

          {privateMessage ? (
            <PrivateMessage data-component="NotificationPrivateMessage">
              <PrivateMessageText
                component="p"
                data-component="NotificationPrivateMessageText"
              >
                {privateMessage}
              </PrivateMessageText>
            </PrivateMessage>
          ) : null}
        </Stack>

        {image ? (
          <NotificationImage
            alt={imageAlt ?? ''}
            data-component="NotificationImagePreview"
            src={image}
          />
        ) : null}
      </NotificationBody>
    </NotificationRoot>
  );
}
