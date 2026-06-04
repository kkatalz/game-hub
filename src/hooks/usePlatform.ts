import usePlatforms from '@/hooks/usePlatforms';

const usePlatform = (id?: number) => {
  const platform = usePlatforms().data?.find(
    (p) => p.id === id,
  );

  return platform;
};

export default usePlatform;
