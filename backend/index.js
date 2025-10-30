// Node/Express backend (index.js)
// Run: npm install
// then: npm start
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example API endpoint that returns sample articles about digital piracy.
// In a real implementation you would fetch from a public API (news, security) or a database.
app.get('/api/sample', (req, res) => {
  const sample = [
    {
      id: 1,
      title: '¿Qué es la piratería digital?',
      source: 'Proyecto Educativo',
      summary: 'Definición y modalidades: software, música, películas y libros digitales.',
      url: '#'
    },
    {
      id: 2,
      title: 'Riesgos al descargar contenido pirata',
      source: 'Seguridad Informática',
      summary: 'Posible malware, pérdida de datos y sanciones legales.',
      url: '#'
    },
    {
      id: 3,
      title: 'Alternativas legales accesibles',
      source: 'Guía de Usuario',
      summary: 'Plataformas de streaming, bibliotecas digitales y tiendas oficiales.',
      url: '#'
    }
  ];
  res.json({ articles: sample });
});

// Serve static frontend in production (if built into client/build)
const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(clientBuildPath));

app.get('*', (req, res) => {
  // If frontend exists, serve index.html for any unknown route
  const indexHtml = path.join(clientBuildPath, 'index.html');
  res.sendFile(indexHtml, err => {
    if (err) {
      res.status(404).json({ message: 'API endpoints: /api/sample' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
