import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { notifications } from '../../data/notifications';

jest.mock('uuid', () => ({
  v4: () => 'test-id',
}));

describe('App integration', () => {
  test('renders unread badge count and indicators that match unread notifications', () => {
    render(<App />);

    const expectedUnreadCount = notifications.filter(
      (notification) => notification.isUnread
    ).length;

    const unreadBadge = screen.getByText(String(expectedUnreadCount));
    expect(unreadBadge).toBeInTheDocument();

    const unreadIndicators = screen.getAllByRole('status', { name: /unread/i });
    expect(unreadIndicators).toHaveLength(expectedUnreadCount);
  });

  test('marks all notifications as read after clicking the button', async () => {
    render(<App />);

    const markAllButton = screen.getByRole('button', {
      name: /mark all as read/i,
    });

    await userEvent.click(markAllButton);

    const badge = screen.getByText((content, element) => {
      return element?.getAttribute('data-component') === 'NotificationsBadge';
    });

    expect(badge).toHaveTextContent('0');
    expect(screen.queryAllByRole('status', { name: /unread/i })).toHaveLength(
      0
    );
  });
});
