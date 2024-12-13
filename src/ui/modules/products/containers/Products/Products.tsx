import { useQuery } from '@tanstack/react-query';
import { listProducts } from '../../services/products-services';
import { useEffect } from 'react';
import { Button } from '@/ui/components/shadcn/button';
import { ProductsSkeleton } from './Products.skeleton';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function Products() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['list-products'],
    queryFn: () => listProducts(),
  });

  useEffect(() => {
    if (isError) {
      toast.error('Ocorreu um erro ao tentar recuperar os produtos!');
    }
  }, [isError]);

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  return (
    <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10 px-7 lg:px-0">
      {data?.map(product => (
        <div
          key={product.sku}
          className="w-full p-4 border rounded-md flex flex-col"
        >
          <img
            src="https://via.placeholder.com/250x150"
            className="w-full"
            alt={product.name}
          />
          <h1 className="text-xl font-bold mt-5 truncate">{product.name}</h1>
          <p className="text-lg">
            Estoque: <strong>{product.inventory.quantity} un</strong>
          </p>
          <Button
            className="w-full mt-2 bg-purple-500 hover:bg-purple-700"
            onClick={() => navigate(`/products/${product.sku}`)}
          >
            Ver Produto
          </Button>
        </div>
      ))}
    </div>
  );
}
