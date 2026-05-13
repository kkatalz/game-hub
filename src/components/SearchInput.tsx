import { Input, InputGroup } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder='Search games...' variant='subtle' />
    </InputGroup>
  );
};

export default SearchInput;
