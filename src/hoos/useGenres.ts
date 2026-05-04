import useData from '@/hoos/useData';

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>('/genres');
export default useGenres;
