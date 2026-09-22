import { useState } from 'react'
import GameGrid from '../components/GameGrid'

function Home({ games, favorites, onToggleFavorite, onAddToCart }) {
  const [searchText, setSearchText] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  const [sortOption, setSortOption] = useState('nombre-az')
  const [currentPage, setCurrentPage] = useState(1)
  const gamesPerPage = 12
  const totalPages = Math.ceil(games.length / gamesPerPage)

  // Generos juegos
  const genres = [...new Set(games.map((game) => game.genre))]

  // Juegos que se muestran en la página
  let visibleGames = games

  /* HU07 - Filtrar los juegos
    El selector de género ya guarda en la variable selectedGenre el género elegido
    (o "Todos" si no se ha elegido ninguno en particular).
    Aquí se debe mostrar solo los juegos que coincidan con ese género.
    Si selectedGenre es "Todos", se deben mostrar todos los juegos sin filtrar.
    Nota: Se puede usar el método filter() comparando el genre de cada juego.
  */

  /* HU08 - Buscar
    El campo de búsqueda ya guarda en la variable searchText lo que se escribe.
    Aquí se deben mostrar solo los juegos cuyo título contenga ese texto,
    sin importar si está en mayúsculas o minúsculas.
    Nota: Se puede usar el método filter() junto con toLowerCase() e includes().
  */

  /* HU04 - Ordenar los juegos
    El selector ya guarda en la variable sortOption la opción elegida
    (por ejemplo "precio-asc", "precio-desc" o "nombre-az").
    Aquí se debe usar esa variable para reordenar la lista de juegos antes de mostrarla.
    Nota: Se puede copiar el arreglo de juegos con [...games] y usar el método sort(),
    comparando el price o el title según el valor de sortOption.
  */

  // HU06 - Paginación
  // Los controles de abajo (Anterior, números de página, Siguiente) ya funcionan
  // y actualizan el estado "currentPage".
  // Aquí debes calcular qué juegos corresponden a la página actual y mostrar
  // solo esos, en vez de mostrar el arreglo completo.
  // Pista: calcula el índice de inicio con (currentPage - 1) * gamesPerPage,
  // y usa slice(inicio, inicio + gamesPerPage) sobre el arreglo de juegos
  // antes de recorrerlo con map().

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

        {totalPages > 1 && (
          <div className="pagination">
            <button
              type="button"
              className="page-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={
                  pageNumber === currentPage ? 'page-btn page-btn--active' : 'page-btn'
                }
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}

            <button
              type="button"
              className="page-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
