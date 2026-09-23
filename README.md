# Voxel - Tienda de videojuegos

Proyecto base para el taller de Scrum (Ingeniería de Software 1).
Es una tienda de videojuegos hecha con React + Vite. Los juegos se leen desde Supabase.

## Cómo empezar

1. Clona el repositorio:

   ```
   git clone <url-del-repositorio>
   cd voxel
   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Copia en la carpeta del proyecto (junto a `package.json`) el archivo `.env` que entrega el docente.
   Debe tener estas dos variables:

   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```

4. Inicia la aplicación:

   ```
   npm run dev
   ```

5. Abre en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173).
