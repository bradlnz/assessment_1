import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DashboardService } from '../services/dashboard.service';

import { Order } from '../../order';
import { ComponentModel } from '../../component';
@Component({
  selector: 'app-order_edit',
  templateUrl: './order_edit.component.html',
  styleUrls: ['./order_edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  order: FormGroup;
  number: FormControl;
  dateRequired: FormControl;
  description: FormControl;
  components: ComponentModel[];

  constructor(private dashboardService: DashboardService, private route: ActivatedRoute, private router: Router) { }

  createFormControls() {
    this.number = new FormControl("", Validators.required);
    this.dateRequired = new FormControl("", Validators.required);
    this.description = new FormControl("", Validators.required);
  }

  createForm() {
    this.order = new FormGroup({
      number: this.number,
      dateRequired: this.dateRequired,
      description: this.description
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.route.params.subscribe(params => {
      this.dashboardService.getOrder(params.id).subscribe(response => {
        this.order.patchValue(response);

        console.log(response);

        this.components = response.components;
      });
    });


  }

  onSubmit() {
    console.log(this.order);
    if (this.order.valid) {
      console.log("Form Submitted!");
      
      this.dashboardService.saveOrder(this.order.value).subscribe((response) => {
        console.log(response);
          this.router.navigate(['dashboard', 'orders']);
        },
        error => {
          //this.notificationService.printErrorMessage(error);
        });
       
    }
  }

}
