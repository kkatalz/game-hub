import { Heading } from '@chakra-ui/react';

interface DefinitionItemProps {
  term: string;
  children: React.ReactNode;
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <div>
      <Heading fontSize='md'>{term}</Heading>
      {children}
    </div>
  );
};

export default DefinitionItem;
