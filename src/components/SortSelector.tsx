import { Button, Menu } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button outline='none' size='sm'>
          Order by relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value='relevance'>Order by relevance</Menu.Item>
          <Menu.Item value='date'>Order by date</Menu.Item>
          <Menu.Item value='name'>Order by name</Menu.Item>
          <Menu.Item value='Release data'>Order by release data</Menu.Item>
          <Menu.Item value='popularity'>Order by popularity</Menu.Item>
          <Menu.Item value='average_rating'>Order by average rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
