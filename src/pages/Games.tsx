import { useEffect, useMemo, useState } from 'react';
import GameCard from '../components/GameCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getGames } from '../services/gameService';
import { getFavorites, toggleFavorite } from '../services/favoritesService';
import type { Game } from '../types/Game';

function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [favorites, setFavorites] = useState<Game[]>([]);
  const [search, setSearch] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [sort, setSort] = useState('title-asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadGames() {
      try {
        setLoading(true);
        setError('');
        const data = await getGames();
        setGames(data);
      } catch (err) {
        setError('Mängude laadimine ebaõnnestus. Proovi hiljem uuesti.');
      } finally {
        setLoading(false);
      }
    }

    loadGames();
    setFavorites(getFavorites());
  }, []);

  const genres = useMemo(() => {
    return Array.from(new Set(games.map((game) => game.genre))).sort();
  }, [games]);

  const platforms = useMemo(() => {
    return Array.from(new Set(games.map((game) => game.platform))).sort();
  }, [games]);

  const filteredGames = useMemo(() => {
    let result = [...games];

    if (search.trim() !== '') {
      result = result.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genreFilter !== 'all') {
      result = result.filter((game) => game.genre === genreFilter);
    }

    if (platformFilter !== 'all') {
      result = result.filter((game) => game.platform === platformFilter);
    }

    if (sort === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === 'title-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sort === 'newest') {
      result.sort(
        (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      );
    }

    if (sort === 'oldest') {
      result.sort(
        (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      );
    }

    return result;
  }, [games, search, genreFilter, platformFilter, sort]);

  function handleToggleFavorite(game: Game) {
    const updatedFavorites = toggleFavorite(game);
    setFavorites(updatedFavorites);
  }

  function checkFavorite(gameId: number) {
    return favorites.some((game) => game.id === gameId);
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <h1 className="fw-bold">Mängud</h1>
          <p className="text-secondary mb-0">Kokku leitud: {filteredGames.length}</p>
        </div>
      </div>

      <section className="filter-box shadow-sm mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Otsi nime järgi</label>
            <input
              type="text"
              className="form-control"
              placeholder="Näiteks: shooter"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Žanr</label>
            <select
              className="form-select"
              value={genreFilter}
              onChange={(event) => setGenreFilter(event.target.value)}
            >
              <option value="all">Kõik žanrid</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Platvorm</label>
            <select
              className="form-select"
              value={platformFilter}
              onChange={(event) => setPlatformFilter(event.target.value)}
            >
              <option value="all">Kõik platvormid</option>
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <label className="form-label">Sorteeri</label>
            <select
              className="form-select"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="title-asc">A-Z</option>
              <option value="title-desc">Z-A</option>
              <option value="newest">Uuemad</option>
              <option value="oldest">Vanemad</option>
            </select>
          </div>
        </div>
      </section>

      {filteredGames.length === 0 ? (
        <div className="alert alert-info">Sellise otsinguga mänge ei leitud.</div>
      ) : (
        <div className="row g-4">
          {filteredGames.map((game) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={game.id}>
              <GameCard
                game={game}
                favorite={checkFavorite(game.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Games;
