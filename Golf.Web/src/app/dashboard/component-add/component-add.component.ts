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

import { ComponentModel } from '../../component';

@Component({
  selector: 'app-component-add',
  templateUrl: './component-add.component.html',
  styleUrls: ['./component-add.component.scss']
})
export class ComponentAddComponent implements OnInit {

  component: FormGroup;
  number: FormControl;
  quantity: FormControl;
  orderId: string;

  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) { }

  createFormControls() {
    this.number = new FormControl("", Validators.required);
    this.quantity = new FormControl("", Validators.required);
  }

  createForm() {
    this.component = new FormGroup({
      number: this.number,
      quantity: this.quantity
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();


    this.route.params.subscribe(params => {
      this.orderId = params.id;
    });

  }

  onSubmit() {
    console.log(this.component);
    if (this.component.valid) {
      console.log("Form Submitted!");

      var component = this.component.value;

      component.orderId = this.orderId;

      this.dashboardService.saveComponent(component).subscribe((response) => {

        this.router.navigate(['dashboard', 'components']);
      },
        error => {

        });

    }
  }
}
