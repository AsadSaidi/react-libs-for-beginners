import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Rutas de categorías y librerías se añadirán aquí */}
      </Routes>
    </Layout>
  )
}

export default App
