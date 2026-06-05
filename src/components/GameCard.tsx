import { Link } from 'react-router-dom';
import type { Game } from '../types/Game';

type GameCardProps = {
  game: Game;
  favorite: boolean;
  onToggleFavorite: (game: Game) => void;
};

function GameCard({ game, favorite, onToggleFavorite }: GameCardProps) {
  return (
    <div className="card game-card h-100 shadow-sm">
      <img src={game.thumbnail} className="card-img-top" alt={game.title} />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between gap-2 align-items-start">
          <h5 className="card-title">{game.title}</h5>
          <span className="badge text-bg-primary">{game.genre}</span>
        </div>

        <p className="card-text text-secondary small flex-grow-1">{game.short_description}</p>

        <p className="mb-2 small">
          <strong>Platform:</strong> {game.platform}
        </p>

        <div className="d-flex gap-2 mt-auto">
          <Link to={`/games/${game.id}`} className="btn btn-outline-primary flex-fill">
            Detailid
          </Link>

          <button
            className={favorite ? 'btn btn-warning' : 'btn btn-outline-warning'}
            onClick={() => onToggleFavorite(game)}
          >
            {favorite ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
