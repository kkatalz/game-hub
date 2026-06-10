import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from '@/components/ui/provider.tsx';
import { RouterProvider } from 'react-router-dom';
import routes from '@/routing/routes.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
