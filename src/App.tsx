import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from '@/routes/AppRoutes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './configurations/reactQuery';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
