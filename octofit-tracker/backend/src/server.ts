import cors from 'cors';
import express from 'express';
import { connectToDatabase } from './config/database.js';
import apiRouter from './routes/index.js';

const app = express();
const port = 8000;
const frontendPort = 5173;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-${port}.app.github.dev`
  : `http://localhost:${port}`;
const allowedOrigins = codespaceName
  ? [`https://${codespaceName}-${frontendPort}.app.github.dev`]
  : [`http://localhost:${frontendPort}`];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiUrl: baseUrl });
});

const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`OctoFit Tracker API listening at ${baseUrl}`);
    });
  } catch (error) {
    console.error('Failed to start OctoFit Tracker API:', error);
    process.exit(1);
  }
};

void startServer();