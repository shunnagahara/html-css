import React from 'react';
import { Box, Stack, Avatar, Typography } from '@mui/material';

export default function Notification({
  action,
  actionType,
  actorAvatar,
  actorName,
  image,
  imageAlt,
  isUnread,
  privateMessage,
  target,
  timeAgo,
}) {
  const isGroupAction = actionType === 'group';

  return (
    <Stack
      component="article"
      direction="row"
      spacing={2}
      data-component="Notification"
      sx={(theme) => ({
        alignItems: 'flex-start',
        padding: theme.spacing(2),
        backgroundColor: isUnread
          ? theme.palette.blue[100]
          : theme.palette.common.white,
        borderRadius: '1.2rem',
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(3),
        },
        transition: 'background-color 0.2s ease',
      })}
    >
      <Avatar
        src={actorAvatar}
        alt={actorName}
        data-component="NotificationAvatar"
        sx={{ height: 48, width: 48 }}
      />

      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-start"
        data-component="NotificationBody"
        sx={{ flex: 1 }}
      >
        <Stack spacing={1} flex={1} data-component="NotificationDetails">
          <Typography
            component="p"
            data-component="NotificationMessage"
            sx={(theme) => ({
              margin: 0,
              color: theme.palette.grey[600],
              ...theme.typography.preset3_medium,
              lineHeight: 1.5,
            })}
          >
            <Box
              component="span"
              sx={(theme) => ({
                cursor: 'pointer',
                ...theme.typography.preset3_bold,
                marginRight: theme.spacing(0.5),
                color: theme.palette.navy[950],
                '&:hover': {
                  color: theme.palette.blue[950],
                },
              })}
            >
              {actorName}
            </Box>
            {action}
            {target ? (
              <Box
                component="span"
                sx={(theme) => ({
                  ...theme.typography.preset3_bold,
                  marginLeft: theme.spacing(0.5),
                  color: theme.palette.grey[600],
                  '&:hover': {
                    color: theme.palette.blue[950],
                  },
                  cursor: 'pointer',
                })}
              >
                {target}
              </Box>
            ) : null}
            {isUnread ? (
              <Box
                component="span"
                aria-label="unread"
                role="status"
                data-component="NotificationUnreadIndicator"
                sx={(theme) => ({
                  display: 'inline-block',
                  height: 8,
                  width: 8,
                  marginLeft: theme.spacing(1),
                  backgroundColor: theme.palette.red[500],
                  borderRadius: '50%',
                })}
              />
            ) : null}
          </Typography>

          <Typography
            component="time"
            dateTime="PT1M"
            data-component="NotificationTime"
            sx={(theme) => ({
              color: theme.palette.grey[500],
              ...theme.typography.preset4_medium,
            })}
          >
            {timeAgo}
          </Typography>

          {privateMessage ? (
            <Box
              data-component="NotificationPrivateMessage"
              sx={(theme) => ({
                ...theme.typography.preset4_medium,
                marginTop: theme.spacing(1),
                padding: theme.spacing(2),
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                  backgroundColor: theme.palette.blue[100],
                },
                border: `0.1rem solid ${theme.palette.navy[100]}`,
                borderRadius: '0.8rem',
                cursor: 'pointer',
              })}
            >
              <Typography
                component="p"
                data-component="NotificationPrivateMessageText"
                sx={(theme) => ({
                  margin: 0,
                  color: theme.palette.grey[600],
                  ...theme.typography.preset4_medium,
                })}
              >
                {privateMessage}
              </Typography>
            </Box>
          ) : null}
        </Stack>

        {image ? (
          <Box
            component="img"
            src={image}
            alt={imageAlt ?? ''}
            data-component="NotificationImagePreview"
            sx={(theme) => ({
              height: 48,
              width: 48,
              border: `0.1rem solid ${theme.palette.navy[100]}`,
              borderRadius: '0.8rem',
              cursor: 'pointer',
              objectFit: 'cover',
              [theme.breakpoints.up('sm')]: {
                height: 56,
                width: 56,
              },
            })}
          />
        ) : null}
      </Stack>
    </Stack>
  );
}
