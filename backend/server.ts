import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import cargoRoutes from './routes/cargo';
import path from 'path';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/landing', express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.redirect('/landing');
});

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/cargo', cargoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
