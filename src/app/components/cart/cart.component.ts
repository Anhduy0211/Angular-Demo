import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public price:number = 3000;
public total:number =0;
public sum:number;
  constructor() { }

  ngOnInit(): void {
  }
public Tinhtien(sum){
this.total =this.total+sum;
}
public Tinhtien2(minus){
  if(this.total == 0){
    this.total =0;
  }
  else{
    this.total = this.total-minus;
  }
}
}
