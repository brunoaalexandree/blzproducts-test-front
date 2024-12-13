import { AppLayout } from '@/ui/layouts/AppLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';
import { routes } from './Constants';
import { Products } from '@/ui/modules/products/containers/Products';
import { RegisterProduct } from '@/ui/modules/products/containers/RegisterProduct';
import { ProductDetail } from '@/ui/modules/products/containers/ProductDetail';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Navigate to={routes.products} replace />} />
      <Route path={routes.products}>
        <Route index element={<Products />} />
        <Route path={routes.register} element={<RegisterProduct />} />
        <Route path=":sku" element={<ProductDetail />} />
      </Route>
    </Route>,
  ),
);
