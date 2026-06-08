import useGameQueryStore from '@/store';
import { Button, Menu } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Metacritic' },
    { value: '-rating', label: 'Rating' },
  ];

  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='subtle' size='sm'>
          Order by {currentSortOrder?.label || 'Relevance'}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <Menu.Item
              key={order.value}
              value={order.value}
              onClick={() => setSortOrder(order.value)}
            >
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
