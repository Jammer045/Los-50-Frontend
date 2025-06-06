import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Participant_Rogelio from '../assets/Rogelio_Martinez.jpeg';
import Participant_Miguel from '../assets/Miguel.jpeg';
import Participan_Yarishna from '../assets/Yarishna.jpeg';
import Participant_Nahomi from '../assets/Nahomi.jpeg';
import Particpant_Roberto from '../assets/Roberto.jpeg';
import Participant_ana from '../assets/ana.jpeg';
import Participant_Francisco from '../assets/Francisco.jpeg';
import Participant_Paola from '../assets/Paola.jpeg';

const ParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [teamFilter, setTeamFilter] = useState('all');

  useEffect(() => {
    // Simulando carga de datos (después conectarás con tu API real)
    setTimeout(() => {
      setParticipants([
        {
          id: 1,
          name: 'Rogelio Martínez',
          age: 32,
          occupation: 'Cantante',
          team: 'norte',
          bio: 'Cantante del regional Méxicano.',
          image: Participant_Rogelio,
          status: 'active',
          Vote: 0
        },
        {
          id: 2,
          name: 'Yarishna',
          age: 28,
          occupation: 'Modelo',
          team: 'sur',
          bio: 'Modelo internacional con experiencia en reality shows anteriores.',
          image: Participan_Yarishna,
          status: 'active',
          Vote: 0
        },
        {
          id: 3,
          name: 'Miguel Ángel',
          age: 35,
          occupation: 'Chef',
          team: 'norte',
          bio: 'Chef de renombre que ha trabajado en restaurantes de 5 estrellas.',
          image: Participant_Miguel,
          status: 'active',
          Vote: 0
        },
        {
          id: 4,
          name: 'Nahomi',
          age: 29,
          occupation: 'Estrella de reality shows',
          team: 'sur',
          bio: 'Estrella de reality shows con una personalidad carismática.',
          image: Participant_Nahomi,
          status: 'active',
          Vote: 0
        },
        {
          id: 5,
          name: 'Roberto Gómez',
          age: 40,
          occupation: 'Actor',
          team: 'norte',
          bio: 'Actor de telenovelas con una personalidad carismática.',
          image: Particpant_Roberto,
          status: 'active',
          Vote: 0
        },
        {
          id: 6,
          name: 'Ana Gutiérrez',
          age: 26,
          occupation: 'Ingeniera',
          team: 'sur',
          bio: 'Ingeniera aeroespacial con una mente estratégica.',
          image: Participant_ana,
          status: 'active',
          Vote: 0
        },
        {
          id: 7,
          name: 'Francisco López',
          age: 31,
          occupation: 'Actor',
          team: 'norte',
          bio: 'Acator colombiano con una personalidad carismática.',
          image: Participant_Francisco,
          status: 'eliminated',
          Vote: 0
        },
        {
          id: 8,
          name: 'Paola Torres',
          age: 33,
          occupation: 'Cantante',
          team: 'sur',
          bio: 'Cantante con múltiples discos de platino y personalidad fuerte.',
          image: Participant_Paola,
          status: 'active',
          Vote: 0
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtrar participantes según la búsqueda y equipo
  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          participant.occupation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = teamFilter === 'all' || participant.team === teamFilter;
    
    return matchesSearch && matchesTeam;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Cargando participantes...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Participantes de Los 50</h1>
      
      {/* Barra de búsqueda y filtros */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar participante..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        
        <div className="flex-shrink-0">
          <select
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos los equipos</option>
            <option value="norte">Equipo Norte</option>
            <option value="sur">Equipo Sur</option>
          </select>
        </div>
      </div>
      
      {/* Contador de resultados */}
      <div className="mb-6 text-gray-500 text-sm">
        Mostrando {filteredParticipants.length} de {participants.length} participantes
      </div>
      
      {/* Grid de participantes */}
      {filteredParticipants.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredParticipants.map((participant) => (
            <Link
              to={`/participante/${participant.id}`}
              key={participant.id}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition">
                <div className="relative">
                  <img 
                    src={participant.image} 
                    alt={participant.name} 
                    className={`w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105 ${
                      participant.status === 'eliminated' ? 'grayscale opacity-80' : ''
                    }`}
                  />
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 text-xs font-bold rounded ${
                      participant.team === 'norte' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-red-600 text-white'
                    }`}>
                      {participant.team === 'norte' ? 'Norte' : 'Sur'}
                    </div>
                  </div>
                  
                  {participant.status === 'eliminated' && (
                    <div className="absolute top-3 left-3">
                      <div className="px-2 py-1 bg-gray-800 text-white text-xs font-bold rounded">
                        Eliminado
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h2 className="text-lg font-bold truncate">{participant.name}</h2>
                  <p className="text-gray-600 text-sm">{participant.age} años • {participant.occupation}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-gray-600">No se encontraron participantes que coincidan con tu búsqueda.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setTeamFilter('all');
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

export default ParticipantsPage;