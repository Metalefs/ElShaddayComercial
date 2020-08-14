import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/data/service/domain//PedidoService';
@Component({
  selector: 'app-count-pedido',
  templateUrl: './count-pedido.component.html',
  styleUrls: ['./count-pedido.component.css']
})
export class CountPedidoComponent implements OnInit {
  TotalMarmitasEntregues: number;
  constructor(private PedidoService: PedidoService) { }
  async LerPedidos(){
    this.PedidoService.Count().subscribe(data=>{
      console.log(data);
      this.TotalMarmitasEntregues += data.count;
    });
  }
  ngOnInit(): void {
    this.TotalMarmitasEntregues = 768;
    this.LerPedidos();
  }

}
