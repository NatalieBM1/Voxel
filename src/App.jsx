import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import Header from './components/Header'
import GameList from './components/GameList'
import Footer from './components/Footer'

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <div className="app">
      <Header />
      <main className="main">
        {loading && (
          <div className="status" role="status">
            <span className="status-spinner" aria-hidden="true"></span>
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
        {!loading && !error && <GameList games={games} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
