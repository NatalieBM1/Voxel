import GameCard from './GameCard'

function GameList({ games }) {
  return (
    <section className="catalog">
      <div className="catalog-head">
        <h2>Catálogo</h2>
        <p>{games.length} juegos</p>
      </div>
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}

export default GameList
