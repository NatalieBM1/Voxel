import GameCard from './GameCard'

// Cuadrícula de tarjetas (Inicio y Favoritos)
function GameGrid({ games, favorites, onToggleFavorite, onAddToCart }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isFavorite={favorites.includes(game.id)}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default GameGrid
