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

  // HU08 - Filtrar los juegos - Inserta aquí el código para mostrar solo los juegos del género seleccionado

  // HU09 - Buscar - Inserta aquí el código para mostrar solo los juegos cuyo título coincide con la búsqueda

  // HU05 - Ordenar los juegos - Inserta aquí el código para que los juegos se reordenen según sortOption antes de mostrarlos

  function handleShowMore() {
    // HU07 - Paginación - Inserta aquí el código para mostrar los primeros 12 juegos y cargar 12 más cada vez que se presione "Ver más"
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
