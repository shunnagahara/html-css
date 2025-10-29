import { http, HttpResponse } from 'msw';
import { notifications } from '../data/notifications';

export const handlers = [
  http.get('/api/notifications', () => {
    return HttpResponse.json({ notifications });
  }),
];
