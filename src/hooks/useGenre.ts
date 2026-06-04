import useGenres from '@/hooks/useGenres';

const useGenre = (id?: number) => {
  const genre = useGenres().data?.find((g) => g.id === id);

  return genre;
};
export default useGenre;
