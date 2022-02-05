import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../interfaces/Product.Interface";
import {PagosModel} from "../../models/Pagos.Model";
import {NgForm} from "@angular/forms";
import {PagosService} from "../../services/pagos.service";
import Swal from "sweetalert2";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ges-pago',
  templateUrl: './ges-pago.component.html',
  styleUrls: ['./ges-pago.component.css']
})
export class GesPagoComponent implements OnInit {

  pago:PagosModel=new PagosModel();

  constructor(private _pagoService:PagosService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
  const id=this._route.snapshot.paramMap.get('id');
    if (id !=='registrar'){
      this._pagoService.listaPago(id)
        //@ts-ignore
        .subscribe((resp: PagosModel)=>{
          this.pago=resp;
          this.pago._id=id;

        })
    }
  }

guardar(formPago:NgForm){
  console.log(this.pago);
    if (formPago.invalid){
return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Espere...',
      text: 'Guardando la informacion!',
      allowOutsideClick: false,
      showConfirmButton: false,
      allowEscapeKey: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.pago._id){
      peticion=this._pagoService.actualizar(this.pago);
    }else {
      peticion=this._pagoService.create(this.pago);
    }

  //@ts-ignore
  peticion.subscribe(resp=>{
    Swal.fire({
      icon: 'success',
      title: this.pago.name,
      text: 'Se almacenó el producto correctamente!',
      allowOutsideClick: false,
      showConfirmButton: true,
      allowEscapeKey: false
    });
  });
}
}
