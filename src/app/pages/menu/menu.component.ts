import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(private service: OrderDetailsService) {}
  developmentData:any;

 ngOnInit(): void{
  this.developmentData = this.service.serviceDetails;
 }

}
