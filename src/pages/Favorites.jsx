// eslint-disable-next-line no-unused-vars -- games, favorites, onToggleFavorite y onAddToCart se usan al resolver HU06
function Favorites({ games, favorites, onToggleFavorite, onAddToCart }) {
  function handleShowMore() {
    // HU07 - Paginación - Inserta aquí el código para mostrar los primeros 12 juegos y cargar 12 más cada vez que se presione "Ver más"
  }

  return (
    <div className="page">
      <div className="page__header">
        <h2>Favoritos</h2>
      </div>
      <div className="page__content">
        {/* HU06 - Favoritos - Inserta aquí el código para mostrar los juegos que están en la lista de favoritos */}

        <button type="button" className="btn-show-more" onClick={handleShowMore}>
          Ver más
        </button>
      </div>
    </div>
  )
}

export default Favorites
