import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow='hidden'
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform 0.4s ease-in-out',
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
