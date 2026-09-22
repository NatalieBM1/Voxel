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
  const [favorites, setFavorites] = useState([])
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

  // Handler del corazón en cada tarjeta: ya recibe el juego y ya está conectado, falta la lógica de adentro
  function handleToggleFavorite(game) {
    // HU06 - Favoritos - Inserta aquí el código para agregar o quitar este juego de la lista de favoritos
  }

  // Handler de "Agregar al carrito" en cada tarjeta: ya recibe el juego y ya está conectado, falta la lógica de adentro
  function handleAddToCart(game) {
    // HU10 - Carrito - Inserta aquí el código para agregar este juego al carrito (si ya está, debe sumar uno a la cantidad)
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
