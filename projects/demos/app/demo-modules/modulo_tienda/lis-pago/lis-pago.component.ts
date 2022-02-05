import { Component, OnInit } from '@angular/core';
import {PagosService} from "../../services/pagos.service";
import {PagosModel} from "../../models/Pagos.Model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-lis-pago',
  templateUrl: './lis-pago.component.html',
  styleUrls: ['./lis-pago.component.css']
})
export class LisPagoComponent implements OnInit {

  pagos:PagosModel[]=[];
  cargando=false;

  constructor(private _pagosService: PagosService) { }

  ngOnInit(): void {
    this.cargando=true;
    this._pagosService.listar()
      .subscribe(resp=>{
      this.pagos=resp;
      this.cargando=false;
    })

  }

eliminar(pago: PagosModel, i: number){

    //@ts-ignore
    Swal.fire({
    title: '¿Esta Seguro?',
      text: `Desea eliminar el producto ${pago.name}`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then(resp=>{
      if (resp.value){
        this.pagos.splice(i, 1);
        this._pagosService.eliminar(pago._id).subscribe();
        Swal.fire({
          icon: 'success',
          text: `Se a Eliminado correctamente el producto ${pago.name}`,
          allowOutsideClick: false,
          showConfirmButton: true,
          allowEscapeKey: false
        });
      }
    });

}
}
