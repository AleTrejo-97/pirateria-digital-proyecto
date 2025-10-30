import React, { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('/api/sample')
      .then(res => res.json())
      .then(data => {
        if (data.articles) setArticles(data.articles);
      })
      .catch(err => {
        console.error('Error fetching sample API:', err);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '40px auto', padding: 20 }}>
      <header>
        <h1>La Piratería en la Era Digital</h1>
        <p>Segundo avance — Front & Back (ejemplo local)</p>
      </header>

      <section>
        <h2>Artículos y Recursos (consumo de API de ejemplo)</h2>
        {articles.length === 0 ? (
          <p>Cargando artículos...</p>
        ) : (
          <ul>
            {articles.map(a => (
              <li key={a.id} style={{ marginBottom: 12 }}>
                <strong>{a.title}</strong> — <em>{a.source}</em>
                <p style={{ margin: '6px 0' }}>{a.summary}</p>
                <a href={a.url}>Leer más</a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Descripción breve del proyecto</h2>
        <p>
          Este proyecto busca educar sobre la piratería digital: qué es, riesgos, y alternativas legales.
          En este segundo avance se incluye un backend con Node.js que expone una API de muestra y un front en React.
        </p>
      </section>

      <footer style={{ marginTop: 40 }}>
        <small>Servidor (backend): http://localhost:5000 — Frontend (dev): http://localhost:3000</small>
      </footer>
    </div>
  );
}

export default App;
