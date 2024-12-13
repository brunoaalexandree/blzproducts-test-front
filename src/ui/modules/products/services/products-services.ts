import { api } from '@/configurations/api';

export interface Warehouse {
  locality: string;
  quantity: number;
  type: 'ECOMMERCE' | 'PHYSICAL_STORE';
}

export interface Inventory {
  quantity: number;
  warehouses: Warehouse[];
}

export interface Product {
  sku: number;
  name: string;
  inventory: Inventory;
}

export interface ProductResponse {
  sku: number;
  name: string;
  marketable: boolean;
  inventory: {
    quantity: number;
    warehouses: Warehouse[];
  };
}

export async function listProducts(): Promise<ProductResponse[]> {
  const { data } = await api().get<ProductResponse[]>('/product');
  return data;
}

export async function getProduct(sku: string): Promise<ProductResponse> {
  const { data } = await api().get<ProductResponse>(`/product/${sku}`);
  return data;
}

export async function createProduct(
  product: Product,
): Promise<ProductResponse> {
  const { data } = await api().post<ProductResponse>('/product', product);
  return data;
}

export async function updateProduct(
  sku: number,
  product: Product,
): Promise<ProductResponse> {
  const { data } = await api().put<ProductResponse>(`/product/${sku}`, product);
  return data;
}

export async function deleteProduct(sku: number): Promise<void> {
  await api().delete(`/product/${sku}`);
}
