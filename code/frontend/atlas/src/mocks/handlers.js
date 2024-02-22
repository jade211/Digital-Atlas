// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('http://127.0.0.1:8000/transport/', (req, res, ctx) => {
    return res(
      ctx.json([
        // Mock data for /transport/
      ])
    );
  }),

  rest.get('http://127.0.0.1:8000/extra_transport/', (req, res, ctx) => {
    return res(
      ctx.json([
        // Mock data for /extra_transport/
      ])
    );
  }),

  // Add more handlers for other API endpoints if needed
];