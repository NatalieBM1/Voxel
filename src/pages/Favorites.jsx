import { useState } from 'react'

// eslint-disable-next-line no-unused-vars -- games, favorites, onToggleFavorite y onAddToCart se usan al resolver HU05
function Favorites({ games, favorites, onToggleFavorite, onAddToCart }) {
  const [currentPage, setCurrentPage] = useState(1)
  const gamesPerPage = 12
  const totalPages = Math.ceil(games.length / gamesPerPage)

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
        <h2>Favoritos</h2>
      </div>
      <div className="page__content">
        {/* HU05 - Favoritos
            Aquí debes mostrar únicamente los juegos que están guardados en la lista de favoritos.
            Nota: Se puede usar el método filter() sobre el arreglo completo de juegos,
            dejando solo los que su id esté dentro del arreglo "favorites". */}

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

export default Favorites
