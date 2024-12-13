import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ProductFormData, productSchema } from '../../schemas/product-schema';
import { createProduct } from '../../services/products-services';
import { toast } from 'react-toastify';
import { Label } from '@/ui/components/shadcn/label';
import { Input } from '@/ui/components/shadcn/input';
import { Button } from '@/ui/components/shadcn/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RegisterProduct() {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      sku: 0,
      name: '',
      inventory: {
        warehouses: [
          {
            locality: '',
            quantity: 0,
            type: 'ECOMMERCE',
          },
        ],
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'inventory.warehouses',
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success('Produto cadastrado com sucesso!');
      reset();
    },
    onError: () => {
      toast.error('Ocorreu um erro ao tentar cadastrar o produto!');
    },
  });

  const onSubmit = (values: ProductFormData) => {
    mutate({
      sku: values.sku,
      name: values.name,
      inventory: {
        quantity: values.inventory.warehouses.reduce(
          (acc, warehouse) => acc + warehouse.quantity,
          0,
        ),
        warehouses: values.inventory.warehouses,
      },
    });
  };

  return (
    <>
      <span
        className="px-7 lg:px-0 flex items-center gap-2 text-2xl w-full max-w-screen-xl mt-20 font-bold text-purple-700 hover:cursor-pointer"
        onClick={() => navigate('/products')}
      >
        <ArrowLeft size={24} /> Voltar
      </span>
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Cadastro de Produto</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="sku">SKU</Label>
            <Input
              id="sku"
              type="number"
              {...register('sku', { valueAsNumber: true })}
            />
            {errors.sku && (
              <p className="text-red-500 text-sm">{errors.sku.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="name">Nome do produto</Label>
            <Input id="name" {...register('name')} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="border p-3 rounded">
            <h2 className="font-semibold mb-2">Armazéns</h2>

            {fields.map((field, index) => (
              <div key={field.id} className="mb-4">
                <div>
                  <Label htmlFor={`inventory.warehouses.${index}.locality`}>
                    Localização
                  </Label>
                  <Input
                    id={`inventory.warehouses.${index}.locality`}
                    {...register(
                      `inventory.warehouses.${index}.locality` as const,
                    )}
                  />
                  {errors.inventory?.warehouses?.[index]?.locality && (
                    <p className="text-red-500 text-sm">
                      {errors.inventory.warehouses[index].locality?.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor={`inventory.warehouses.${index}.quantity`}>
                    Quantidade
                  </Label>
                  <Input
                    id={`inventory.warehouses.${index}.quantity`}
                    type="number"
                    {...register(`inventory.warehouses.${index}.quantity`, {
                      valueAsNumber: true,
                    })}
                  />
                  {errors.inventory?.warehouses?.[index]?.quantity && (
                    <p className="text-red-500 text-sm">
                      {errors.inventory.warehouses[index].quantity?.message}
                    </p>
                  )}
                </div>

                <div className="mt-2">
                  <Label htmlFor={`inventory.warehouses.${index}.type`}>
                    Tipo
                  </Label>
                  <select
                    id={`inventory.warehouses.${index}.type`}
                    {...register(`inventory.warehouses.${index}.type` as const)}
                  >
                    <option value="ECOMMERCE">E-Commerce</option>
                    <option value="PHYSICAL_STORE">Loja Física</option>
                  </select>
                  {errors.inventory?.warehouses?.[index]?.type && (
                    <p className="text-red-500 text-sm">
                      {errors.inventory.warehouses[index].message}
                    </p>
                  )}
                </div>

                <Button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-2"
                  variant="destructive"
                >
                  Remover Armazém
                </Button>
              </div>
            ))}

            <Button
              type="button"
              className="bg-green-500"
              onClick={() =>
                append({ locality: '', quantity: 0, type: 'ECOMMERCE' })
              }
            >
              Adicionar Armazém
            </Button>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-purple-500 hover:bg-purple-700"
            size="lg"
          >
            {isPending ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>
      </div>
    </>
  );
}
