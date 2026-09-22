import { formatPrice } from '../lib/formatPrice'

function GameCard({ game }) {
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
          <span className="price">{formatPrice(game.price)}</span>
        </div>
      </div>
      <button className="btn-add">Agregar al carrito</button>
    </article>
  )
}

export default GameCard
