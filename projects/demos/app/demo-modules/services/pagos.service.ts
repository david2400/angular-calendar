import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {delay, map} from "rxjs";
import {PagosModel} from "../models/Pagos.Model";

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private url="https://veterinaria-7ae9a-default-rtdb.firebaseio.com";

  constructor(private _http:HttpClient) { }

create(pago: PagosModel){
return this._http.post(`${this.url}/pagos.json`, pago)
  .pipe(
    map((resp:any)=>{
      pago._id=resp.name;
      return pago;
    })
  )
}

actualizar(pago: PagosModel){
    const pagoAux={
      ...pago
    }
    //@ts-ignore
  delete pagoAux._id;

return this._http.put(`${this.url}/pagos/${pago._id}.json`,pagoAux);
}

eliminar(id: string | null){
    return this._http.delete(`${this.url}/pagos/${id}.json`);
}

listaPago(id:string | null){
    return this._http.get(`${this.url}/pagos/${id}.json`);

}

  listar(){
    return this._http.get(`${ this.url }/pagos.json`)
      .pipe(
        map(this._convertirArray),
        delay(3000)
      );
  }

  private _convertirArray(pagoObj: object){
const pagos: PagosModel[]=[];
console.log(pagoObj);

if (pagoObj=== null){
  return [];
}

Object.keys(pagoObj).forEach(key=>{
  //@ts-ignore
  const pago:PagosModel=pagoObj[key];
  pago._id=key;

  pagos.push(pago);
})

return pagos;
  }
}
