// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // Port, na którym będzie działał nasz serwer

app.use(cors()); // Umożliwia komunikację między różnymi portami

// Definiujemy prosty endpoint API
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
