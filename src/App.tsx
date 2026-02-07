import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { CategoriesPage } from './pages/CategoriesPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        {/* Rutas de librerías se añadirán aquí */}
      </Routes>
    </Layout>
  )
}

export default App
