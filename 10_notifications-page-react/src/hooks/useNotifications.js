import { useCallback, useEffect, useState } from 'react';

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    const loadNotifications = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/notifications', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }

        const data = await response.json();

        if (isMounted) {
          setNotifications(data.notifications ?? []);
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }

        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadNotifications();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        isUnread: false,
      }))
    );
  }, []);

  const unreadCount = notifications.filter(
    (notification) => notification.isUnread
  ).length;

  return {
    error,
    isLoading,
    markAllAsRead,
    notifications,
    unreadCount,
  };
}
