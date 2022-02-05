export interface ProductInterface {
  _id: string | null;
  name: string;
  code: string;
  description: string;
  purchasePrice: string;
  salePrice: string;
  quantity: number;
  stock: number;
  dateCreate: string;
  dateUpdate: string;
}
