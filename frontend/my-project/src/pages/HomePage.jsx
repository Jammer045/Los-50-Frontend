import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image1_cap1 from '../assets/LOS50_S02_EP001_TLMD_800x450_2380558915701.jpg';
import BackgroundImage1 from '../assets/background1.png';

const ImprovedHomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Efecto para cargar los datos
  useEffect(() => {
    // Simulando carga de datos
    setTimeout(() => {
      setItems([
        { 
          id: 1, 
          title: 'Los 50 - Episodio 1', 
          description: 'El comienzo de nuestra segunda temporada con invitados especiales.',
          category: 'episodio',
          image: Image1_cap1,
          featured: true
        },
        { 
          id: 2, 
          title: 'Entrevista exclusiva', 
          description: 'Conversamos con uno de los personajes más importantes de la temporada.',
          category: 'entrevista',
          image: Image1_cap1,
          date: '2025-04-25',
          featured: false
        },
        { 
          id: 3, 
          title: 'Detrás de cámaras', 
          description: 'Te mostramos cómo se graba cada escena de Los 50.',
          category: 'exclusivo',
          image: Image1_cap1,
          date: '2025-04-20',
          featured: false
        },
        { 
          id: 4, 
          title: 'Los 50 - Episodio 2', 
          description: 'Las tensiones comienzan a surgir entre los participantes.',
          category: 'episodio',
          image: Image1_cap1,
          date: '2025-05-01',
          featured: true
        },
        { 
          id: 5, 
          title: 'Perfiles: Participante destacado', 
          description: 'Conoce la historia de uno de los participantes más populares.',
          category: 'perfil',
          image: Image1_cap1,
          date: '2025-04-15',
          featured: false
        },
        { 
          id: 6, 
          title: 'Los mejores momentos', 
          description: 'Recopilación de las escenas más impactantes hasta ahora.',
          category: 'exclusivo',
          image: Image1_cap1,
          date: '2025-04-10',
          featured: false
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtrar los elementos según la búsqueda y categoría
  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().startsWith(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Obtener elementos destacados para el banner
  const featuredItems = items.filter(item => item.featured);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div 
  className="max-w-6xl mx-auto px-4 py-6 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${BackgroundImage1})` }}
>
      {/* Banner destacado */}
      {featuredItems.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredItems.map((item) => (
              <Link to={item.id === 5 ? '/participantes' : `/detail/${item.id}`}>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <img 
    src={item.image} 
    alt={item.title} 
    className="w-full h-48 object-cover"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded mb-2">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="line-clamp-2 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Barra de búsqueda y filtros */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar contenido..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <div className="flex-shrink-0">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todas las categorías</option>
            <option value="episodio">Episodios</option>
            <option value="entrevista">Entrevistas</option>
            <option value="exclusivo">Exclusivos</option>
            <option value="perfil">Perfiles</option>
          </select>
        </div>
      </div>
      
      {/* Título de la sección principal */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Los 50 - Segunda Temporada</h1>
        {filteredItems.length > 0 && (
          <span className="text-gray-500 text-sm">
            {filteredItems.length} {filteredItems.length === 1 ? 'resultado' : 'resultados'}
          </span>
        )}
      </div>
      
      {/* Grid de contenidos */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <Link to={`/detail/${item.id}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
  to={item.id === 5 ? '/participantes' : `/detail/${item.id}`}
  
  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  Ver detalles
</Link>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-gray-600">No se encontraron resultados para tu búsqueda.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('all');
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default ImprovedHomePage;