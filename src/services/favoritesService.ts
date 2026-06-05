import type { Game } from '../types/Game';

const FAVORITES_KEY = 'favoriteGames';

export function getFavorites(): Game[] {
  const savedFavorites = localStorage.getItem(FAVORITES_KEY);
  return savedFavorites ? JSON.parse(savedFavorites) : [];
}

export function saveFavorites(games: Game[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(games));
}

export function isFavorite(gameId: number): boolean {
  return getFavorites().some((game) => game.id === gameId);
}

export function toggleFavorite(game: Game): Game[] {
  const favorites = getFavorites();
  const gameExists = favorites.some((favorite) => favorite.id === game.id);

  const updatedFavorites = gameExists
    ? favorites.filter((favorite) => favorite.id !== game.id)
    : [...favorites, game];

  saveFavorites(updatedFavorites);
  return updatedFavorites;
}
