// Navegación base del taller: cambiar de pestaña ya funciona,
// no es una historia de usuario (no lleva comentario HU0X).
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
