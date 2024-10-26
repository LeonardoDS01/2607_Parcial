const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nosotros.html'));
  });

  app.get('/dulces', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dulces.html'));
  });

  app.get('/salados', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'salados.html'));
  });

  app.get('/ubicacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ubicacion.html'));
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
