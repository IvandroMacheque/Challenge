import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Servicos from './paginas/Servicos'
import Contatos from './paginas/Contatos'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import WhatsAppButton from './componentes/WhatsAppButton'
import ScrollToTop from './componentes/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contactos" element={<Contatos />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  )
}

export default App
