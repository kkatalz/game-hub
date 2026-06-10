import NavBar from '@/components/NavBar';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding='20px'>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
