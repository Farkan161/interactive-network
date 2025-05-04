import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});