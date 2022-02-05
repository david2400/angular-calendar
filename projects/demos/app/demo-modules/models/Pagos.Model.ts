import {ProductInterface} from "../modulo_tienda/interfaces/Product.Interface";

export class PagosModel implements ProductInterface{
  _id: string | null="";
  name: string="";
  code: string="";
  description: string="";
  purchasePrice: string="";
  salePrice: string="";
  quantity: number=0;
  stock: number=0;
  dateCreate: string="";
  dateUpdate: string="";
}
