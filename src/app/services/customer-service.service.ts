import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  GetHeaders(): Observable<{ header: string, value: number}[]> {
    return this.http.get<{ header: string, value: number}[]>('../../assets/json/mockdata.json');
  }

  GetPageModel(): Observable<any> {
    return this.http.get<any>('../../assets/json/pagemodel.json');
  }
}
