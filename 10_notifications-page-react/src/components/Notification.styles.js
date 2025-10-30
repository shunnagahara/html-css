import { Avatar, Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NotificationRoot = styled(Stack, {
  shouldForwardProp: (prop) => prop !== '$isUnread',
})(({ $isUnread, theme }) => ({
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  backgroundColor: $isUnread
    ? theme.palette.blue[100]
    : theme.palette.common.white,
  borderRadius: '1.2rem',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  transition: 'background-color 0.2s ease',
}));

export const NotificationAvatar = styled(Avatar)(() => ({
  height: 48,
  width: 48,
}));

export const NotificationBody = styled(Stack)(() => ({
  alignItems: 'flex-start',
  flex: 1,
}));

export const NotificationMessage = styled(Typography)(({ theme }) => ({
  ...theme.typography.preset3_medium,
  margin: 0,
  lineHeight: 1.5,
  color: theme.palette.grey[600],
}));

export const ActorName = styled(Box)(({ theme }) => ({
  ...theme.typography.preset3_bold,
  marginRight: theme.spacing(0.5),
  color: theme.palette.navy[950],
  '&:hover': {
    color: theme.palette.blue[950],
  },
  cursor: 'pointer',
}));

export const Target = styled(Box)(({ theme }) => ({
  ...theme.typography.preset3_bold,
  marginLeft: theme.spacing(0.5),
  color: theme.palette.grey[600],
  '&:hover': {
    color: theme.palette.blue[950],
  },
  cursor: 'pointer',
}));

export const UnreadIndicator = styled('span')(({ theme }) => ({
  display: 'inline-block',
  height: 8,
  width: 8,
  marginLeft: theme.spacing(1),
  backgroundColor: theme.palette.red[500],
  borderRadius: '50%',
}));

export const NotificationTime = styled(Typography)(({ theme }) => ({
  ...theme.typography.preset4_medium,
  color: theme.palette.grey[500],
}));

export const PrivateMessage = styled(Box)(({ theme }) => ({
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
}));

export const PrivateMessageText = styled(Typography)(({ theme }) => ({
  ...theme.typography.preset4_medium,
  margin: 0,
  color: theme.palette.grey[600],
}));

export const NotificationImage = styled('img')(({ theme }) => ({
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
}));
