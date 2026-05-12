import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboard';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});