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
  selector: 'app-component-edit',
  templateUrl: './component-edit.component.html',
  styleUrls: ['./component-edit.component.scss']
})
export class ComponentEditComponent implements OnInit {

  component: FormGroup;
  number: FormControl;
  quantity: FormControl;
  componentId: string;

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
      this.dashboardService.getComponent(params.id).subscribe(response => {

        console.log(response);

        this.component.patchValue(response);
      });
    });
  }

  onSubmit() {
    console.log(this.component);
    if (this.component.valid) {
      console.log("Form Submitted!");

      var component = this.component.value;

      this.dashboardService.saveComponent(component).subscribe((response) => {

        this.router.navigate(['dashboard', 'components']);
      },
        error => {

        });

    }
  }

}
