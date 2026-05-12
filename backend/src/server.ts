import telemetryRoutes from './routes/telemetry';
import connectDB from './config/db';
import aiRoutes from './routes/ai';
import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboard';

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/telemetry', telemetryRoutes);

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
