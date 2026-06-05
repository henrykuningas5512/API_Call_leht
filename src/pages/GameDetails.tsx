import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getGameById } from '../services/gameService';
import { isFavorite, toggleFavorite } from '../services/favoritesService';
import type { GameDetails as GameDetailsType } from '../types/Game';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetailsType | null>(null);
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadGameDetails() {
      try {
        setLoading(true);
        setError('');

        if (!id) {
          setError('Mängu ID puudub.');
          return;
        }

        const data = await getGameById(id);
        setGame(data);
        setFavorite(isFavorite(data.id));
      } catch (err) {
        setError('Mängu detailide laadimine ebaõnnestus.');
      } finally {
        setLoading(false);
      }
    }

    loadGameDetails();
  }, [id]);

  function handleToggleFavorite() {
    if (!game) return;
    toggleFavorite(game);
    setFavorite(!favorite);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!game) {
    return <ErrorMessage message="Mängu ei leitud." />;
  }

  return (
    <main className="container py-4">
      <Link to="/games" className="btn btn-outline-light mb-4">
        ← Tagasi mängude juurde
      </Link>

      <section className="details-box shadow-lg">
        <div className="row g-4">
          <div className="col-lg-5">
            <img src={game.thumbnail} alt={game.title} className="img-fluid rounded detail-image" />
          </div>

          <div className="col-lg-7">
            <span className="badge text-bg-primary mb-2">{game.genre}</span>
            <h1 className="fw-bold">{game.title}</h1>
            <p className="text-secondary">{game.description}</p>

            <div className="row g-3 my-3">
              <div className="col-md-6">
                <div className="small-info-card">
                  <strong>Platvorm</strong>
                  <span>{game.platform}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="small-info-card">
                  <strong>Arendaja</strong>
                  <span>{game.developer}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="small-info-card">
                  <strong>Publisher</strong>
                  <span>{game.publisher}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="small-info-card">
                  <strong>Väljalase</strong>
                  <span>{game.release_date}</span>
                </div>
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <a href={game.game_url} target="_blank" rel="noreferrer" className="btn btn-primary">
                Ava mängu leht
              </a>
              <button
                className={favorite ? 'btn btn-warning' : 'btn btn-outline-warning'}
                onClick={handleToggleFavorite}
              >
                {favorite ? 'Eemalda lemmikutest' : 'Lisa lemmikutesse'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {game.minimum_system_requirements && (
        <section className="details-box shadow-lg mt-4">
          <h2>Süsteeminõuded</h2>
          <div className="row g-3 mt-2">
            <div className="col-md-6"><strong>OS:</strong> {game.minimum_system_requirements.os || 'Puudub'}</div>
            <div className="col-md-6"><strong>Processor:</strong> {game.minimum_system_requirements.processor || 'Puudub'}</div>
            <div className="col-md-6"><strong>Memory:</strong> {game.minimum_system_requirements.memory || 'Puudub'}</div>
            <div className="col-md-6"><strong>Graphics:</strong> {game.minimum_system_requirements.graphics || 'Puudub'}</div>
            <div className="col-md-6"><strong>Storage:</strong> {game.minimum_system_requirements.storage || 'Puudub'}</div>
          </div>
        </section>
      )}

      {game.screenshots && game.screenshots.length > 0 && (
        <section className="details-box shadow-lg mt-4">
          <h2>Pildid</h2>
          <div className="row g-3 mt-2">
            {game.screenshots.slice(0, 3).map((screenshot) => (
              <div className="col-md-4" key={screenshot.id}>
                <img src={screenshot.image} alt={game.title} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default GameDetails;
