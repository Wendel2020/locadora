import { Component, OnInit } from '@angular/core';
import { CarroService } from '../../carro/carro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../../carro/carro';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  carros:Carro[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public carroService: CarroService

   ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {


    this.carroService.getAll().subscribe((data: Carro[])=>{
      this.carros  = data;
      console.log(this.carros);
    });
  }

}
