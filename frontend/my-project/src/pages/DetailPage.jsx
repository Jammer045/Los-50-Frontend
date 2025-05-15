import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Image1_cap1 from '../assets/LOS50_S02_EP001_TLMD_800x450_2380558915701.jpg';
import Image2_cap1 from '../assets/36687836360-1080pnbcstations.jpg';

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando la obtención de datos (después conectarás con tu API real)
    setLoading(true);
    setTimeout(() => {
      // Datos simulados - reemplazar con llamada a API real posteriormente
      const mockItems = [
        { 
          id: 1, 
          title: 'Elemento 1', 
          description: 'Descripción completa del elemento 1. Esta es información más detallada que se mostrará en la página de detalles.',
          image: Image1_cap1,
          date: '2025-04-28',
          author: 'Juan Pérez'
        },
        { 
          id: 2, 
          title: 'Elemento 2', 
          description: 'Descripción completa del elemento 2. Esta es información más detallada que se mostrará en la página de detalles.',
          image: Image2_cap1,
          date: '2025-04-25',
          author: 'María Rodríguez'
        },
        { 
          id: 3, 
          title: 'Elemento 3', 
          description: 'Descripción completa del elemento 3. Esta es información más detallada que se mostrará en la página de detalles.',
          image: 'https://via.placeholder.com/600x400',
          date: '2025-04-20',
          author: 'Carlos López'
        },
      ];
      
      const foundItem = mockItems.find(item => item.id === parseInt(id));
      
      if (foundItem) {
        setItem(foundItem);
        setError(null);
      } else {
        setError('No se encontró el elemento solicitado');
      }
      
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Cargando detalles...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4">
        <p>{error}</p>
        <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
          Volver a la página principal
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Volver a la página principal
      </Link>
      
      {item && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-64 object-cover object-center"
          />
          
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
            
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span>Por {item.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(item.date).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long', 
                year: 'numeric'
              })}</span>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700">{item.description}</p>
              
              {/* Aquí puedes añadir más contenido, como secciones, comentarios, etc. */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Sección adicional</h2>
                <p className="text-gray-700">
                  Esta es una sección adicional que puedes personalizar según tus necesidades.
                  Aquí podrías incluir más información relacionada con este elemento específico.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;