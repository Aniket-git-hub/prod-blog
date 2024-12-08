import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

export default app;