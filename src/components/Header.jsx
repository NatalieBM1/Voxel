// Lista fija de géneros, solo para que el selector se vea completo
const GENEROS = [
  'Acción',
  'Aventura',
  'Carreras',
  'Deportes',
  'Estrategia',
  'Indie',
  'RPG',
  'Simulación',
]

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Marca: el cuadrado al final es el "vóxel" */}
        <h1 className="wordmark">
          Voxel<span className="wordmark-block" aria-hidden="true"></span>
        </h1>

        {/* Buscador: solo se ve, todavía no hace nada */}
        <div className="search">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4-4" />
          </svg>
          <input type="search" placeholder="Buscar juegos" aria-label="Buscar juegos" disabled />
        </div>

        {/* Selector de género: solo se ve, todavía no filtra */}
        <select className="genre-select" aria-label="Género" disabled>
          <option>Género: Todos</option>
          {GENEROS.map((genero) => (
            <option key={genero}>{genero}</option>
          ))}
        </select>

        {/* Carrito: solo se ve, el contador es un texto fijo */}
        <div className="cart-indicator" role="img" aria-label="Carrito, 0 juegos">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h2.5l2.2 10.5a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 8H6.2" />
            <circle cx="9.5" cy="19" r="1.2" />
            <circle cx="16.5" cy="19" r="1.2" />
          </svg>
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  )
}

export default Header
