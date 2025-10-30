Segundo Avance - Proyecto Final: La Piratería en la Era Digital

Estructura del proyecto:
- backend/    -> servidor Node.js (Express) que ofrece endpoint de ejemplo /api/sample
- client/     -> aplicación React (create-react-app style) que consume /api/sample

Instrucciones para ejecutar en local:

1) Backend:
   - Abrir terminal en folder 'backend'
   - Ejecutar: npm install
   - Ejecutar: npm start
   (El backend escuchará en http://localhost:5000)

2) Frontend:
   - Abrir otra terminal en folder 'client'
   - Ejecutar: npm install
   - Ejecutar: npm start
   - El proyecto usa proxy para redirigir llamadas /api hacia el backend (http://localhost:5000)

Notas:
- Para consumir una API pública real (por ejemplo noticias) puedes:
  a) Añadir una nueva ruta en backend/index.js que use fetch/axios para pedir una API externa.
  b) Guardar la API key en variables de entorno y nunca subirla a GitHub.
- En producción puedes crear el build del cliente (npm run build en client) y servirlo desde backend (está configurado para servir client/build si existe).
