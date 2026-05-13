import genres from '../components/data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres'); Do not call the API. Return dummy data instead.
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
