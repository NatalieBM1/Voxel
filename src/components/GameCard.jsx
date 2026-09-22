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
          {/* HU03 - Precio con formato - Inserta aquí el código para darle formato de moneda colombiana al precio (ej. $ 129.900) */}
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
