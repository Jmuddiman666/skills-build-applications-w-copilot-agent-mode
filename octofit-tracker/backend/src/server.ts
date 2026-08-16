import express from 'express';
import { connectToDatabase } from './config/database.js';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`OctoFit Tracker API listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start OctoFit Tracker API:', error);
    process.exit(1);
  }
};

void startServer();