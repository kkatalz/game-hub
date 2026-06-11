import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from '@/components/ColorModeSwitch';
import SearchInput from '@/components/SearchInput';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack padding='10px' gap='1rem'>
      <Image src={logo} boxSize='60px' cursor='pointer' onClick={() => navigate('/')} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
