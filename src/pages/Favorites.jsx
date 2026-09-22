// eslint-disable-next-line no-unused-vars -- games, favorites, onToggleFavorite y onAddToCart se usan al resolver HU05
function Favorites({ games, favorites, onToggleFavorite, onAddToCart }) {
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
        <h2>Favoritos</h2>
      </div>
      <div className="page__content">
        {/* HU05 - Favoritos
            Aquí debes mostrar únicamente los juegos que están guardados en la lista de favoritos.
            Pista: puedes usar el método filter() sobre el arreglo completo de juegos,
            dejando solo los que su id esté dentro del arreglo "favorites". */}

        <button type="button" className="btn-show-more" onClick={handleShowMore}>
          Ver más
        </button>
      </div>
    </div>
  )
}

export default Favorites
