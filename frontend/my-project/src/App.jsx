import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImprovedHomePage from './pages/ImprovedHomePage';
import DetailPage from './pages/DetailPage';
import ParticipantsPage from './pages/ParticipantsPage';
import ParticipantDetail from './pages/ParticipantsDetails';

// Componente de página no encontrada
const NotFound = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página no encontrada</h1>
    <p className="text-gray-600 mb-8">La página que estás buscando no existe o ha sido movida.</p>
    <a 
      href="/"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Volver al inicio
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ImprovedHomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/participantes" element={<ParticipantsPage />} />
            <Route path="/participante/:id" element={<ParticipantDetail />} />
            <Route path="/episodios" element={<NotFound />} />
            <Route path="/exclusivos" element={<NotFound />} />
            <Route path="/galeria" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;