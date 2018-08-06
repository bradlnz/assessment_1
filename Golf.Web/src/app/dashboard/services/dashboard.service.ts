import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Order } from '../../order'; 
import { ConfigService } from '../../shared/utils/config.service';

import {BaseService} from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx'; 

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class DashboardService extends BaseService {

  baseUrl: string = ''; 

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getOrders(): Observable<Array<Order>> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);
  
    return this.http.get(this.baseUrl + "/orders/get",{headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getOrder(id: string): Observable<Order> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/orders/" + id, { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  saveOrder(order: Order){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + "/orders/save", order, { headers })
      .map(response => response.json())
      .catch(this.handleError);
  }
}
