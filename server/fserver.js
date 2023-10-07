import express from 'express';
import getEvents from './controllers/delete.js';
import { pool } from './config/database.js';
import '../config/dotenv.js'


const app = express();

app.use('/api/gifts', getEvents);

app.use('/home', async (req, res, next) => { // Add 'next' as a parameter
    try {
      const results = await pool.query('SELECT * FROM events ORDER BY id ASC');
      res.status(200).json(results.rows);
      console.log("Fetch events successfully:", results.rows);
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  });
  

// Other routes and server setup

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
