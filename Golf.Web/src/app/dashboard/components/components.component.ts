import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ComponentModel } from '../../component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  components: ComponentModel[];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  edit(id: string) {

    this.router.navigate(['dashboard', 'component-edit', id]);
  }

  ngOnInit() {
    this.dashboardService.getComponents().subscribe((response) => {
      this.components = response;

    },
      error => {
        //this.notificationService.printErrorMessage(error);
      });
  }

}
