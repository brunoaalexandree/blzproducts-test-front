import { z } from 'zod';

export const warehouseSchema = z.object({
  locality: z.string().nonempty('Localização é um campo obrigatório!'),
  quantity: z.number().min(0, 'Quantidade precisa ser maior que 0'),
  type: z.enum(['ECOMMERCE', 'PHYSICAL_STORE']),
});

export const inventorySchema = z.object({
  warehouses: z
    .array(warehouseSchema)
    .min(1, 'Deve haver pelo menos um local de armazenamento!'),
});

export const productSchema = z.object({
  sku: z.number().positive('SKU precisar ser maior que 0'),
  name: z.string().nonempty('Nome do produto é obrigatório!'),
  inventory: inventorySchema,
});

export type ProductFormData = z.infer<typeof productSchema>;
