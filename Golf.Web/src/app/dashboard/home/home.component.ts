import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    
  }

}
