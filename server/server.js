import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';// Import the Express.js framework
const app = express(); // Create an instance of the Express application
const PORT = 3000; // Define the port number for the server
import tableRoutes from './routes/tableRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import menuRoutes from './routes/menuRoutes.js';


dotenv.config();

app.use(cors({
  origin: ['http://localhost:5173', 'https://fastidious-caramel-82ddf6.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // only if you're using cookies/sessions
}));
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/qrmenu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('✅ MongoDB connected')
  }).catch((err) => {
    console.error('❌ MongoDB connection error:', err)
  });
// Define a route for the root URL ("/")

app.get('/', (req, res) => {
  res.send('<h1>Hello from your Express.js server!</h1>'); // Send an HTML response
});

app.use('/api/tables', tableRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);



// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log a message when the server starts
});