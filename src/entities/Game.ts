import type Genre from '@/entities/Genre';
import type Platform from '@/entities/Platform';
import type Publisher from '@/entities/Publisher';

export default interface Game {
  id: number;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  name: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
