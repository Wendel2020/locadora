import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { Carro } from '../carro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{


  id!: number;
  post!: Carro;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public carroService: CarroService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.carroService.find(this.id).subscribe((data: Carro)=>{
      this.post = data;
    });
  }

}



