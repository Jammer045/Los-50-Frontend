import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ParticipantDetail = () => {
  const { id } = useParams();
  const [participant, setParticipant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Datos de ejemplo para las estadísticas y el historial
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simulando la obtención de datos (después conectarás con tu API real)
    setLoading(true);
    setTimeout(() => {
      // Datos simulados - reemplazar con llamada a API real posteriormente
      const mockParticipants = [
        {
          id: 1,
          name: 'Carlos Martínez',
          age: 32,
          occupation: 'Deportista',
          team: 'norte',
          bio: 'Ex futbolista profesional con una carrera en la Primera División. Destaca por su resistencia física y espíritu competitivo. Siempre ha estado involucrado en deportes desde su infancia y ahora busca un nuevo desafío en Los 50.',
          fullBio: 'Carlos comenzó su carrera deportiva a los 8 años en las categorías infantiles de un club local. A los 16 ya era promesa del fútbol nacional y a los 18 debutó como profesional. Jugó durante 10 temporadas en diferentes equipos, logrando 3 campeonatos nacionales y una participación en torneos internacionales. Una lesión en la rodilla le obligó a retirarse prematuramente, pero ha sabido reinventarse como entrenador personal y analista deportivo. Su participación en Los 50 representa para él un reto personal para demostrar que sigue manteniendo el nivel competitivo que le caracterizó durante su carrera.',
          image: 'https://via.placeholder.com/600x600',
          coverImage: 'https://via.placeholder.com/1200x400',
          socialMedia: {
            instagram: '@carlosmartinez',
            twitter: '@carlos_mtz',
            tiktok: '@carlosmtz'
          },
          status: 'active',
          challengesWon: 4,
          alliances: ['Roberto Gómez', 'Miguel Ángel'],
          rivals: ['Javier López']
        },
        {
          id: 2,
          name: 'Lucía Fernández',
          age: 28,
          occupation: 'Modelo',
          team: 'sur',
          bio: 'Modelo internacional con experiencia en reality shows anteriores. Su carisma y estrategia social la hacen una de las favoritas.',
          fullBio: 'Lucía comenzó su carrera como modelo a los 16 años, participando en pasarelas locales. A los 20 dio el salto internacional, trabajando para importantes marcas en París, Milán y Nueva York. Su belleza y carisma la llevaron a participar en dos reality shows anteriores, quedando finalista en ambos. Es conocida por su habilidad para crear alianzas estratégicas y su personalidad extrovertida. Fuera de las cámaras, Lucía es embajadora de varias causas benéficas y ha lanzado recientemente su propia línea de maquillaje. Ve su participación en Los 50 como una oportunidad para mostrar que hay mucho más en ella que su imagen.',
          image: 'https://via.placeholder.com/600x600',
          coverImage: 'https://via.placeholder.com/1200x400',
          socialMedia: {
            instagram: '@lucia_fdez',
            twitter: '@lucia_fernandez',
            tiktok: '@luciafernandez'
          },
          status: 'active',
          challengesWon: 2,
          alliances: ['Ana Gutiérrez', 'Paula Torres'],
          rivals: ['Sofía Herrera']
        },
        // Datos de más participantes aquí...
      ];
      
      const foundParticipant = mockParticipants.find(p => p.id === parseInt(id));
      
      if (foundParticipant) {
        setParticipant(foundParticipant);
        
        // Generar estadísticas para el participante
        setStats({
          challenges: {
            total: 8,
            won: foundParticipant.challengesWon,
            lost: 8 - foundParticipant.challengesWon
          },
          voting: {
            received: 5,
            given: 3
          },
          days: 32,
          popularity: 87
        });
        
        // Generar historial de eventos
        setHistory([
          {
            day: 32,
            event: 'Ganó el desafío de resistencia',
            type: 'challenge_win'
          },
          {
            day: 28,
            event: 'Formó alianza con ' + foundParticipant.alliances[0],
            type: 'alliance'
          },
          {
            day: 25,
            event: 'Nominado para eliminación',
            type: 'nomination'
          },
          {
            day: 21,
            event: 'Ganó inmunidad en desafío grupal',
            type: 'immunity'
          },
          {
            day: 18,
            event: 'Conflicto con ' + foundParticipant.rivals[0],
            type: 'conflict'
          }
        ]);
        
        setError(null);
      } else {
        setParticipant(null);
        setStats(null);
        setHistory([]);
        setError('No se encontró el participante solicitado');
      }
      
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Cargando información del participante...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/participantes" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a participantes
        </Link>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {participant && (
        <>
          {/* Banner de portada */}
          <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
            <img 
              src={participant.coverImage} 
              alt={`Portada de ${participant.name}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:items-end">
                <div className="relative mt-4 md:mt-0 md:mr-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden">
                    <img 
                      src={participant.image} 
                      alt={participant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
                    participant.team === 'norte' ? 'bg-blue-600' : 'bg-red-600'
                  }`}>
                    <Flag className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="text-white flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold">{participant.name}</h1>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                      participant.team === 'norte' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-red-600 text-white'
                    }`}>
                      Equipo {participant.team === 'norte' ? 'Norte' : 'Sur'}
                    </div>
                    
                    {participant.status === 'eliminated' && (
                      <div className="inline-flex items-center px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-semibold">
                        Eliminado
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mt-1">{participant.age} años • {participant.occupation}</p>
                </div>
                
                <Link to="/participantes" className="inline-flex items-center text-white bg-gray-800/50 hover:bg-gray-800/80 px-3 py-2 rounded transition md:ml-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Link>
              </div>
            </div>
          </div>
          
          {/* Contenido principal */}
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Columna lateral */}
              <div className="lg:col-span-1 space-y-6">
                {/* Tarjeta de estadísticas */}
                {stats && (
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4 bg-gray-800 text-white">
                      <h2 className="text-xl font-bold">Estadísticas</h2>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                          <Trophy className="w-5 h-5 text-yellow-500 mb-1" />
                          <p className="text-sm text-gray-500">Desafíos ganados</p>
                          <p className="text-xl font-bold">{stats.challenges.won}</p>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                          <Clock className="w-5 h-5 text-blue-500 mb-1" />
                          <p className="text-sm text-gray-500">Días en competencia</p>
                          <p className="text-xl font-bold">{stats.days}</p>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                          <Users className="w-5 h-5 text-green-500 mb-1" />
                          <p className="text-sm text-gray-500">Alianzas</p>
                          <p className="text-xl font-bold">{participant.alliances.length}</p>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                          <Heart className="w-5 h-5 text-red-500 mb-1" />
                          <p className="text-sm text-gray-500">Popularidad</p>
                          <p className="text-xl font-bold">{stats.popularity}%</p>
                        </div>
                      </div>
                      
                      {/* Gráfico de desafíos */}
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Rendimiento en desafíos</h3>
                        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div 
                            className="bg-green-500 h-4" 
                            style={{ width: `${(stats.challenges.won / stats.challenges.total) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{stats.challenges.won} ganados</span>
                          <span>{stats.challenges.lost} perdidos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Tarjeta de redes sociales */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-gray-800 text-white">
                    <h2 className="text-xl font-bold">Redes sociales</h2>
                  </div>
                  
                  <div className="p-4">
                    <ul className="space-y-3">
                      {participant.socialMedia.instagram && (
                        <li>
                          <a 
                            href={`https://instagram.com/${participant.socialMedia.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-pink-600"
                          >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center mr-3">
                              <span className="text-white font-bold">IG</span>
                            </div>
                            <span>{participant.socialMedia.instagram}</span>
                          </a>
                        </li>
                      )}
                      
                      {participant.socialMedia.twitter && (
                        <li>
                          <a 
                            href={`https://twitter.com/${participant.socialMedia.twitter.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-500"
                          >
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                              <span className="text-white font-bold">TW</span>
                            </div>
                            <span>{participant.socialMedia.twitter}</span>
                          </a>
                        </li>
                      )}
                      
                      {participant.socialMedia.tiktok && (
                        <li>
                          <a 
                            href={`https://tiktok.com/@${participant.socialMedia.tiktok.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-black"
                          >
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-3">
                              <span className="text-white font-bold">TT</span>
                            </div>
                            <span>{participant.socialMedia.tiktok}</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                
                {/* Tarjeta de alianzas y rivales */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-gray-800 text-white">
                    <h2 className="text-xl font-bold">Relaciones</h2>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="text-md font-semibold text-gray-700 mb-2">Alianzas</h3>
                      <div className="space-y-2">
                        {participant.alliances.map((ally, index) => (
                          <div key={`ally-${index}`} className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                              <Users className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-700">{ally}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-md font-semibold text-gray-700 mb-2">Rivales</h3>
                      <div className="space-y-2">
                        {participant.rivals.map((rival, index) => (
                          <div key={`rival-${index}`} className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                              <Users className="w-4 h-4 text-red-600" />
                            </div>
                            <span className="text-gray-700">{rival}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenido principal */}
              <div className="lg:col-span-2 space-y-6">
                {/* Biografía */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-gray-800 text-white">
                    <h2 className="text-xl font-bold">Biografía</h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {participant.fullBio}
                    </p>
                  </div>
                </div>
                
                {/* Historial en el programa */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-gray-800 text-white">
                    <h2 className="text-xl font-bold">Historial en el programa</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="relative">
                      {history.map((item, index) => (
                        <div key={`history-${index}`} className="mb-6 ml-6">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ${
                              item.type === 'challenge_win' ? 'bg-yellow-100' :
                              item.type === 'alliance' ? 'bg-green-100' :
                              item.type === 'nomination' ? 'bg-red-100' :
                              item.type === 'immunity' ? 'bg-purple-100' :
                              'bg-gray-100'
                            }`}>
                              {item.type === 'challenge_win' && <Trophy className="w-5 h-5 text-yellow-600" />}
                              {item.type === 'alliance' && <Users className="w-5 h-5 text-green-600" />}
                              {item.type === 'nomination' && <Flag className="w-5 h-5 text-red-600" />}
                              {item.type === 'immunity' && <Star className="w-5 h-5 text-purple-600" />}
                              {item.type === 'conflict' && <Users className="w-5 h-5 text-gray-600" />}
                            </div>
                            
                            <h3 className="text-lg font-semibold">{item.event}</h3>
                            <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">Día {item.day}</span>
                          </div>
                          
                          {index < history.length - 1 && (
                            <div className="absolute left-5 top-10 w-0.5 bg-gray-200 h-16"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Videos del participante */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-gray-800 text-white">
                    <h2 className="text-xl font-bold">Videos destacados</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
                        <p className="text-gray-500">Video destacado #1</p>
                      </div>
                      
                      <div className="rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
                        <p className="text-gray-500">Video destacado #2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ParticipantDetail;