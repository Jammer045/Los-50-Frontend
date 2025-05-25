import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Participant_Rogelio from '../assets/Rogelio_Martinez.jpeg';
import Participant_Miguel from '../assets/Miguel.jpeg';
import Participant_Yarishna from '../assets/Yarishna.jpeg';
import Participant_Nahomi from '../assets/Nahomi.jpeg';
import Participant_Roberto from '../assets/Roberto.jpeg';
import Participant_ana from '../assets/ana.jpeg';
import Participant_Francisco from '../assets/Francisco.jpeg';
import Participant_Paola from '../assets/Paola.jpeg';

const VotingPage = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [votesLimit, setVotesLimit] = useState(7);
  const [votesUsed, setVotesUsed] = useState(0);
  const [votingHistory, setVotingHistory] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

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
          image: Participant_Yarishna,
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
          image: Participant_Roberto,
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
          bio: 'Actor colombiano con una personalidad carismática.',
          image: Participant_Francisco,
          status: 'active',
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

  // Solo mostrar participantes activos para votación
  const activeParticipants = participants.filter(p => p.status === 'active');

  const handleVote = (participant) => {
    setSelectedParticipant(participant);
    setShowConfirmModal(true);
  };
  

  const confirmVote = () => {
    if (votesUsed >= votesLimit) return;

    setParticipants(prev => 
      prev.map(p => 
        p.id === selectedParticipant.id 
          ? { ...p, Vote: p.Vote + 1 }
          : p
      )
    );

    setVotesUsed(prev => prev + 1);
    setVotingHistory(prev => [...prev, {
      participantName: selectedParticipant.name,
      timestamp: new Date().toLocaleTimeString(),
      voteNumber: votesUsed + 1
    }]);

    setShowConfirmModal(false);
    setSelectedParticipant(null);
  };

  // NUEVA FUNCIÓN: Finalizar votación y eliminar participantes sin votos
  const finalizeVoting = () => {
    if (votesUsed === votesLimit) {
      const participantsToEliminate = activeParticipants.filter(p => p.Vote === 0);
      
      setParticipants(prev => 
        prev.map(participant => ({
          ...participant,
          status: participant.Vote === 0 && participant.status === 'active' 
            ? 'eliminated' 
            : participant.status
        }))
      );
      
      // Mostrar mensaje de confirmación
      const eliminatedCount = participantsToEliminate.length;
      if (eliminatedCount > 0) {
        const eliminatedNames = participantsToEliminate.map(p => p.name).join(', ');
        alert(`Votación finalizada. ${eliminatedCount} participante(s) eliminado(s): ${eliminatedNames}`);
      } else {
        alert('Votación finalizada. Todos los participantes recibieron al menos un voto.');
      }
    }
  };

  const resetVoting = () => {
    setParticipants(prev => 
      prev.map(p => ({ ...p, Vote: 0 }))
    );
    setVotesUsed(0);
    setVotingHistory([]);
  };

  const undoLastVote = () => {
    if (votingHistory.length === 0) return;

    const lastVote = votingHistory[votingHistory.length - 1];
    const participant = participants.find(p => p.name === lastVote.participantName);

    if (participant) {
      setParticipants(prev => 
        prev.map(p => 
          p.id === participant.id 
            ? { ...p, Vote: Math.max(0, p.Vote - 1) }
            : p
        )
      );
      setVotesUsed(prev => Math.max(0, prev - 1));
      setVotingHistory(prev => prev.slice(0, -1));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Cargando participantes...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Votación - Los 50</h1>
      
      {/* Panel de control de votación */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="votesLimit" className="block text-sm font-medium text-gray-700 mb-1">
                Límite de votos:
              </label>
              <input
                type="number"
                id="votesLimit"
                min="1"
                max="20"
                value={votesLimit}
                onChange={(e) => setVotesLimit(parseInt(e.target.value) || 1)}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={votesUsed > 0}
              />
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {votesUsed} / {votesLimit}
              </div>
              <div className="text-sm text-gray-500">Votos usados</div>
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={undoLastVote}
              disabled={votingHistory.length === 0}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
            >
              Deshacer último voto
            </button>
            
            {/* NUEVO BOTÓN: Finalizar votación */}
            {votesUsed === votesLimit && (
              <button
                onClick={finalizeVoting}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Finalizar votación y eliminar
              </button>
            )}
            
            <button
              onClick={resetVoting}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Reiniciar votación
            </button>
          </div>
        </div>
        
        {/* Barra de progreso */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(votesUsed / votesLimit) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* NUEVO: Indicador de votación completa */}
        {votesUsed === votesLimit && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">
              ✅ Has usado todos tus votos. Puedes finalizar la votación para eliminar participantes sin votos.
            </p>
          </div>
        )}
      </div>

      {/* Historial de votos */}
      {votingHistory.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <h3 className="font-semibold mb-3">Historial de votos:</h3>
          <div className="flex flex-wrap gap-2">
            {votingHistory.map((vote, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {vote.voteNumber}. {vote.participantName} ({vote.timestamp})
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Grid de participantes activos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {activeParticipants.map((participant) => (
          <div key={participant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={participant.image} 
                alt={participant.name} 
                className="w-full aspect-square object-cover"
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
              
              {/* Contador de votos */}
              {participant.Vote > 0 && (
                <div className="absolute top-3 left-3">
                  <div className="bg-green-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                    {participant.Vote} {participant.Vote === 1 ? 'voto' : 'votos'}
                  </div>
                </div>
              )}

              {/* NUEVO: Indicador de riesgo de eliminación */}
              {votesUsed === votesLimit && participant.Vote === 0 && (
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold text-center">
                    ⚠️ SERÁ ELIMINADO
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h2 className="text-lg font-bold truncate">{participant.name}</h2>
              <p className="text-gray-600 text-sm mb-3">
                {participant.age} años • {participant.occupation}
              </p>
              
              <button
                onClick={() => handleVote(participant)}
                disabled={votesUsed >= votesLimit}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
                  votesUsed >= votesLimit
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {votesUsed >= votesLimit ? 'Sin votos disponibles' : 'Votar'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de confirmación */}
      {showConfirmModal && selectedParticipant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-bold mb-4">Confirmar voto</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro que quieres votar por <strong>{selectedParticipant.name}</strong>?
              <br />
              <span className="text-sm text-gray-500">
                Te quedarán {votesLimit - votesUsed - 1} votos disponibles.
              </span>
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmVote}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirmar voto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enlace para volver */}
      <div className="mt-8 text-center">
        <Link 
          to="/participantes" 
          className="text-blue-600 hover:underline"
        >
          ← Volver a participantes
        </Link>
      </div>
    </div>
  );
};

export default VotingPage;