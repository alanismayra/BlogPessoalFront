
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '70vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>



  );
}

export default App;
