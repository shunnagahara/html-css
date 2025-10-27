import React from 'react';
import { Box, Stack, Avatar, Typography } from '@mui/material';

export default function Notification({
  actorName,
  actorAvatar,
  action,
  actionType,
  target,
  timeAgo,
  image,
  imageAlt,
  isUnread,
  privateMessage,
}) {
  const isGroupAction = actionType === 'group';

  return (
    <Stack
      component="article"
      direction="row"
      spacing={2}
      data-component="Notification"
      sx={(theme) => ({
        backgroundColor: isUnread
          ? theme.palette.blue[100]
          : theme.palette.common.white,
        borderRadius: '1.2rem',
        padding: theme.spacing(2),
        alignItems: 'flex-start',
        transition: 'background-color 0.2s ease',
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(3),
        },
      })}
    >
      <Avatar
        src={actorAvatar}
        alt={actorName}
        data-component="NotificationAvatar"
        sx={{ width: 48, height: 48 }}
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
                color: theme.palette.navy[950],
                marginRight: theme.spacing(0.5),
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
                  cursor: 'pointer',
                  color: theme.palette.grey[600],
                  marginLeft: theme.spacing(0.5),
                  '&:hover': {
                    color: theme.palette.blue[950],
                  },
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
                  width: 8,
                  height: 8,
                  marginLeft: theme.spacing(1),
                  borderRadius: '50%',
                  backgroundColor: theme.palette.red[500],
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
                borderRadius: '0.8rem',
                border: `0.1rem solid ${theme.palette.navy[100]}`,
                backgroundColor: theme.palette.common.white,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: theme.palette.blue[100],
                },
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
              width: 48,
              height: 48,
              borderRadius: '0.8rem',
              objectFit: 'cover',
              border: `0.1rem solid ${theme.palette.navy[100]}`,
              cursor: 'pointer',
              [theme.breakpoints.up('sm')]: {
                width: 56,
                height: 56,
              },
            })}
          />
        ) : null}
      </Stack>
    </Stack>
  );
}
