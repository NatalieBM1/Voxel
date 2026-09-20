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
        {loading && <p>Cargando juegos...</p>}
        {error && <p className="error">No se pudieron cargar los juegos: {error}</p>}
        {!loading && !error && <GameList games={games} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
