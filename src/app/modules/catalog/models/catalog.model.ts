export interface MaiCatalogItemModel {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  price: number;
  qnty?: number;
  newPrice?: number;
  inStock: number;
  id: string;
}

export interface MaiCatalogChangeItemData {
  id: string;
  inStock: number;
}
