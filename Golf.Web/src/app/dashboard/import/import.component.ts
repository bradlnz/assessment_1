import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
  }


  uploadDatasource(fileInput: any) {

    let file = fileInput.target.files[0];
    let fileName = file.name;


    let payload = {
      file,
    }

    let formData: FormData = new FormData();
    formData.append('file', file, file.name);


    this.dashboardService.uploadDatasource(formData)
      .subscribe(
        response => {
          console.log('UPLOADING success');

          this.router.navigate(['dashboard', 'orders']);
        },
        error => {
          console.log('error', error);
        });

  }

}
