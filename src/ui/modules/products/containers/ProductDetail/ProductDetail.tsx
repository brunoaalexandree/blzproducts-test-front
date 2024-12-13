import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../services/products-services';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@/ui/components/shadcn/button';
import { ArrowLeft } from 'lucide-react';
import { ProductDetailSkeleton } from './ProductDetail.skeleton';

export function ProductDetail() {
  const { sku } = useParams<{ sku: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['get-product'],
    queryFn: () => getProduct(sku!),
  });

  useEffect(() => {
    if (isError) {
      toast.error('Ocorreu um erro ao tentar recuperar o produto!');
    }
  }, [isError]);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <>
      <span
        className="px-7 lg:px-0 flex items-center gap-2 text-2xl w-full max-w-screen-xl mt-20 font-bold text-purple-700 hover:cursor-pointer"
        onClick={() => navigate('/products')}
      >
        <ArrowLeft size={24} /> Voltar
      </span>
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row mt-10 gap-10 px-7 lg:px-0 pb-7 lg:pb-0">
        <img
          className="w-full lg:max-w-96 rounded-lg"
          src="https://via.placeholder.com/500x500"
        />
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">{data?.name}</h1>
            <p className="mt-10 text-xl lg:text-2xl">
              <strong>SKU:</strong> {data?.sku}
            </p>
            <p className="mt-4 text-2xl">
              <strong>Estoque:</strong> {data?.inventory.quantity} Un
            </p>
            <p className="mt-4 text-xl">
              <strong>Disponível em:</strong>{' '}
              {data?.inventory.warehouses.map((warehouse, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  {warehouse.locality}
                </span>
              ))}
            </p>
          </div>
          <Button className="mt-10 bg-purple-500 hover:bg-purple-700" size="lg">
            Comprar
          </Button>
        </div>
      </div>
    </>
  );
}
