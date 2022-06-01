// // nodemon
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('jadsadsasaas')); // tambahkan init
// app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

// // npm init -y
// // npm express
// // npm install nodemon -g
// // npm start atau node index.js

// /* tambahan untuk file yang akan di running
// //  "start": "node index.js"*/

// Import Express
const express = require('express');
// const cors
const cors = require('cors');
const db = require('./config/database.js');
const Router = require('./routes/routes.js');

// inti express
const app = express();
app.use(express.json());
app.use(cors());

// Testing Database Connection
async function connectDB() {
  try {
    await db.authenticate();
    console.log('DB Terhubunggg');
  } catch (error) {
    console.log('Terdapat masalah error database koneksi:', error);
  }
}

connectDB();

//   use Router
app.use(Router);

// port
app.listen(5000, () => console.log('Server Running at http://localhost:5000'));
