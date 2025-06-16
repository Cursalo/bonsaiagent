// Vercel serverless function entry point
import { createServer } from '../server/server.js';

export default async function handler(req, res) {
  const app = createServer();
  return app(req, res);
}