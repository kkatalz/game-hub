import usePlatforms from '@/hooks/usePlatforms';
import { Button, Menu } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button outline='none' size='sm'>
          Features
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id} value={platform.slug}>
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
