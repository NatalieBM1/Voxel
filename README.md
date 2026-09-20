# Voxel - Tienda de videojuegos

Proyecto base para el taller de Scrum (Ingeniería de Software 1).
Es una tienda de videojuegos hecha con React + Vite. Los juegos se leen desde Supabase.

## Cómo empezar

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd voxel
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Copia en la carpeta del proyecto (junto a `package.json`) el archivo `.env` que entrega el docente.
   Debe tener estas dos variables (puedes ver el formato en `.env.example`):

   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```

4. Inicia la aplicación:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173).

## Estructura

```
src/
  main.jsx                 punto de entrada
  App.jsx                  carga los juegos y arma la página
  lib/supabaseClient.js    conexión con Supabase
  components/              Header, GameList, GameCard y Footer
  styles/App.css           estilos
```

## Durante el taller

Trabajarás en equipo, por sprints, agregando funcionalidades según las historias de usuario que entregue el docente.
Recuerda: el archivo `.env` nunca se sube a git.
