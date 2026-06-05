import axios from 'axios';
import type { Game, GameDetails } from '../types/Game';

const API_URL = 'https://www.freetogame.com/api';

// Kõik API päringud on eraldi failis, et pages/components failid jääksid puhtamaks.
export async function getGames(): Promise<Game[]> {
  const response = await axios.get<Game[]>(`${API_URL}/games`);
  return response.data;
}

export async function getGameById(id: string): Promise<GameDetails> {
  const response = await axios.get<GameDetails>(`${API_URL}/game?id=${id}`);
  return response.data;
}
