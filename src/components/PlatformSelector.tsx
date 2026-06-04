import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import { Button, Menu } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

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
              onClick={() => onSelectPlatform(platform.id)}
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
