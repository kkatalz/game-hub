import type { Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';
import { Button, Menu } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='subtle' size='sm'>
          {selectedPlatform?.name || 'Platforms'}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.slug}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
