function GameCard({ game, isFavorite, onToggleFavorite, onAddToCart }) {
  return (
    <article className="game-card">
      <img
        className="game-cover"
        src={game.image_url}
        alt={game.title}
        width="460"
        height="215"
        loading="lazy"
      />
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <div className="game-meta">
          <span className="game-tag">{game.genre}</span>
          {/* HU02 - Precio con formato
              El precio llega desde la base de datos como un número simple, por ejemplo 129900.
              Aquí debes transformar ese número para que se vea como dinero colombiano,
              por ejemplo "$ 129.900", con el símbolo de pesos y el punto que separa los miles.
              Pista: puedes crear una función formatearPrecio(numero) que reciba el precio
              y devuelva el texto ya formateado, y usarla donde se muestra el precio. */}
          <span>{game.price}</span>
        </div>
      </div>
      <div className="game-actions">
        <button
          type="button"
          className="btn-favorite"
          aria-pressed={isFavorite}
          aria-label="Marcar como favorito"
          onClick={() => onToggleFavorite(game)}
        >
          ♥
        </button>
        <button type="button" className="btn-add-cart" onClick={() => onAddToCart(game)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default GameCard
