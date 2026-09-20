function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image_url} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
      <p className="price">{game.price}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default GameCard
