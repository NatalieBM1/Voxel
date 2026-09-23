// Navegación
const TABS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'favoritos', label: 'Favoritos' },
  { id: 'carrito', label: 'Carrito' },
]

function Navbar({ activeView, onChangeView }) {
  return (
    <nav className="navbar">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={
            tab.id === activeView ? 'navbar__tab navbar__tab--active' : 'navbar__tab'
          }
          onClick={() => onChangeView(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default Navbar
