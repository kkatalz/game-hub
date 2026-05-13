import platforms from '../components/data/platforms';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');  Do not call the API. Return dummy data instead.
const usePlatforms = () => ({ data: platforms, error: null });

export default usePlatforms;
