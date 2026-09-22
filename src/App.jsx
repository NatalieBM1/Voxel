import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeView, setActiveView] = useState('inicio')
  // eslint-disable-next-line no-unused-vars -- setFavorites se usa al resolver HU05
  const [favorites, setFavorites] = useState([])
  // eslint-disable-next-line no-unused-vars -- setCart se usa al resolver HU09
  const [cart, setCart] = useState([])

  // Al abrir la página, pedimos los juegos a Supabase
  useEffect(() => {
    async function loadGames() {
      const { data, error } = await supabase
        .from('games')
        .select('*')
        .order('title')

      if (error) {
        setError(error.message)
      } else {
        setGames(data)
      }
      setLoading(false)
    }

    loadGames()
  }, [])

  // Handler del corazón en cada tarjeta: ya recibe el juego y ya está conectado al botón, falta la lógica de adentro
  // eslint-disable-next-line no-unused-vars -- el parámetro game se usa al resolver HU05
  const handleToggleFavorite = (game) => {
    // HU05 - Favoritos
    // Esta función se ejecuta cada vez que el estudiante hace clic en el corazón de una tarjeta.
    // Debes revisar si el juego (game) ya está en la lista de favoritos:
    //   - Si ya está, debes quitarlo de la lista.
    //   - Si no está, debes agregarlo.
    // Pista: la lista de favoritos está en el estado "favorites", y para cambiarla
    // debes usar su función setFavorites, creando un arreglo nuevo (no modifiques
    // el arreglo original directamente).
  }

  // Handler de "Agregar al carrito" en cada tarjeta: ya recibe el juego y ya está conectado al botón, falta la lógica de adentro
  // eslint-disable-next-line no-unused-vars -- el parámetro game se usa al resolver HU09
  const handleAddToCart = (game) => {
    // HU09 - Carrito
    // Esta función se ejecuta cada vez que se hace clic en "Agregar al carrito".
    // Debes revisar si el juego ya está en el carrito:
    //   - Si ya está, debes sumarle 1 a su cantidad.
    //   - Si no está, debes agregarlo con cantidad 1.
    // Pista: el carrito está en el estado "cart", y para modificarlo debes usar
    // su función setCart, creando un arreglo nuevo.
  }

  return (
    <div className="app">
      <Header />
      <Navbar activeView={activeView} onChangeView={setActiveView} />
      <main className="main">
        {loading && (
          <div className="status" role="status">
            <p>Cargando juegos...</p>
          </div>
        )}
        {error && (
          <div className="status status-error" role="alert">
            <p className="status-title">No se pudieron cargar los juegos</p>
            <p className="status-detail">{error}</p>
            <p>Revisa tu conexión y que el archivo .env tenga los valores del docente.</p>
          </div>
        )}
        {!loading && !error && activeView === 'inicio' && (
          <Home
            games={games}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        )}
        {!loading && !error && activeView === 'favoritos' && (
          <Favorites
            games={games}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
          />
        )}
        {!loading && !error && activeView === 'carrito' && <Cart cart={cart} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
