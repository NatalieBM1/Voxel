import { useState } from 'react'
import GameGrid from '../components/GameGrid'

function Home({ games, favorites, onToggleFavorite, onAddToCart }) {
  const [searchText, setSearchText] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  const [sortOption, setSortOption] = useState('nombre-az')

  // Géneros reales, sacados de los juegos cargados (sin escribirlos a mano)
  const genres = [...new Set(games.map((game) => game.genre))]

  // Juegos que se muestran en la página; por ahora es la lista completa, sin transformar
  let visibleGames = games

  // HU07 - Filtrar los juegos
  // El selector de género ya guarda en la variable selectedGenre el género elegido
  // (o "Todos" si no se ha elegido ninguno en particular).
  // Aquí debes mostrar solo los juegos que coincidan con ese género.
  // Si selectedGenre es "Todos", se deben mostrar todos los juegos sin filtrar.
  // Pista: puedes usar el método filter() comparando el genre de cada juego.

  // HU08 - Buscar
  // El campo de búsqueda ya guarda en la variable searchText lo que el estudiante escribe.
  // Aquí debes mostrar solo los juegos cuyo título contenga ese texto,
  // sin importar si está en mayúsculas o minúsculas.
  // Pista: puedes usar el método filter() junto con toLowerCase() e includes().

  // HU04 - Ordenar los juegos
  // El selector de arriba ya guarda en la variable sortOption la opción elegida
  // (por ejemplo "precio-asc", "precio-desc" o "nombre-az").
  // Aquí debes usar esa variable para reordenar la lista de juegos antes de mostrarla.
  // Pista: puedes copiar el arreglo de juegos con [...games] y usar el método sort(),
  // comparando el price o el title según el valor de sortOption.

  function handleShowMore() {
    // HU06 - Paginación
    // Ahora mismo se muestran todos los juegos al mismo tiempo, lo que hace la página muy larga.
    // Aquí debes hacer que, al inicio, solo se muestren los primeros 12 juegos,
    // y que el botón "Ver más" muestre 12 juegos adicionales cada vez que se presione,
    // hasta llegar al final de la lista.
    // Pista: puedes usar un estado como "visibleCount" que empiece en 12 y aumente
    // de 12 en 12, y usar slice() para cortar el arreglo de juegos hasta ese número.
  }

  return (
    <div className="page">
      <div className="page__header">
        <h2>Inicio</h2>
        <p>{games.length} juegos</p>
      </div>
      <div className="page__content">
        <div className="filters">
          <input
            type="text"
            className="input-search"
            placeholder="Buscar juegos"
            aria-label="Buscar juegos"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <select
            className="select-genre"
            aria-label="Género"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            <option value="Todos">Todos</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <select
            className="select-sort"
            aria-label="Ordenar"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="nombre-az">Nombre A-Z</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </div>

        <GameGrid
          games={visibleGames}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />

        <button type="button" className="btn-show-more" onClick={handleShowMore}>
          Ver más
        </button>
      </div>
    </div>
  )
}

export default Home
