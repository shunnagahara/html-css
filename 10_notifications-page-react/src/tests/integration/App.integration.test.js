import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { notifications as fixtureNotifications } from '../../data/notifications';

jest.mock('uuid', () => {
  let counter = 0;
  return {
    v4: () => `test-id-${counter++}`,
  };
});

describe('App integration', () => {
  const notifications = fixtureNotifications.map((notification, index) => ({
    ...notification,
    id: `notification-${index}`,
  }));

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ notifications }),
        ok: true,
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders unread badge count and indicators that match unread notifications', async () => {
    render(<App />);

    const expectedUnreadCount = notifications.filter(
      (notification) => notification.isUnread
    ).length;

    const unreadBadge = await screen.findByText((content, element) => {
      return (
        element?.getAttribute('data-component') === 'NotificationsBadge' &&
        content === String(expectedUnreadCount)
      );
    });

    expect(unreadBadge).toBeInTheDocument();

    const unreadIndicators = await screen.findAllByRole('status', {
      name: /unread/i,
    });
    expect(unreadIndicators).toHaveLength(expectedUnreadCount);
  });

  test('marks all notifications as read after clicking the button', async () => {
    render(<App />);

    const markAllButton = await screen.findByRole('button', {
      name: /mark all as read/i,
    });

    await act(async () => {
      await userEvent.click(markAllButton);
    });

    await waitFor(() => {
      const badge = screen.getByText((content, element) => {
        return (
          element?.getAttribute('data-component') === 'NotificationsBadge' &&
          content === '0'
        );
      });

      expect(badge).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryAllByRole('status', { name: /unread/i })).toHaveLength(
        0
      );
    });
  });
});
