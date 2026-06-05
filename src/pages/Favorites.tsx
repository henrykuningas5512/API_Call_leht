import { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import { getFavorites, toggleFavorite } from '../services/favoritesService';
import type { Game } from '../types/Game';

function Favorites() {
  const [favorites, setFavorites] = useState<Game[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  function handleToggleFavorite(game: Game) {
    const updatedFavorites = toggleFavorite(game);
    setFavorites(updatedFavorites);
  }

  return (
    <main className="container py-4">
      <h1 className="fw-bold">Lemmikud</h1>
      {favorites.length === 0 ? (
        <div className="alert alert-info">
          Sul pole veel lemmikuid. Mine mängude lehele ja vajuta tähe nuppu.
        </div>
      ) : (
        <div className="row g-4">
          {favorites.map((game) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={game.id}>
              <GameCard game={game} favorite={true} onToggleFavorite={handleToggleFavorite} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
