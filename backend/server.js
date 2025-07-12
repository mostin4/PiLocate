import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { getBusinesses, addBusiness } from './api/businesses.js';
import { sendMessage } from './api/contact.js';
import { getUser } from './api/users.js';

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// API routes
app.get('/api/businesses', getBusinesses);
app.post('/api/businesses', addBusiness);

app.post('/api/contact', sendMessage);
app.get('/api/user', getUser);

app.listen(4000, () => console.log('🚀 Backend hazır: http://localhost:4000'));
