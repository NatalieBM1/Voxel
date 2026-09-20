import GameCard from './GameCard'

function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

export default GameList
