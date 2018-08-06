import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from '../../order';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [Location]
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(private dashboardService: DashboardService, location: Location) { }

  edit(id: string) {
    console.log(id);
    location.href = "/dashboard/order_edit/" + id;
  }
 
  ngOnInit()
  {
    this.dashboardService.getOrders().subscribe((response) => {
      this.orders = response;
    
    },
      error => {
        //this.notificationService.printErrorMessage(error);
      });
  }

}
