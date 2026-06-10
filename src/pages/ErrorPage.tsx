import NavBar from '@/components/NavBar';
import { Box } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box px='10px'>
        <h1>Oops...</h1>
        <p>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An unexpected error has occurred.'}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
