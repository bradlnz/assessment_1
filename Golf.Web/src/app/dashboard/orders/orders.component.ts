import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Order } from '../../order';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [RouterModule]
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  edit(id: string) {
    console.log(id);
    this.router.navigate(['dashboard', 'order_edit', id]);
  }

  ngOnInit() {
    this.dashboardService.getOrders().subscribe((response) => {
        this.orders = response;

      },
      error => {
        //this.notificationService.printErrorMessage(error);
      });
  }

}
