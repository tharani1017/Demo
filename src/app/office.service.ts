import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Office } from './office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private apiUrl = 'http://localhost:8080/office';

  constructor(private http: HttpClient) {}


  getOfficeList(): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.apiUrl}/findAll`);
  }
  getById(id: number): Observable<Office> {
    return this.http.get<Office>(`${this.apiUrl}/find/${id}`);
  }
   
deleteOffice(id: number): Observable<void> {
  const url = `${this.apiUrl}/delete/${id}`;
  return this.http.delete<void>(url);
}

saveEmployee(employeeData: any): Observable<any> {
  const url = `${this.apiUrl}/add`;
  return this.http.post(url, employeeData);
}
updateOffice(officeId: number, updatedData: any): Observable<any> {
  const url = `${this.apiUrl}/update/${officeId}`;
  return this.http.put(url, updatedData);
}


getAllOffices(): Observable<any[]> {
  const url = `${this.apiUrl}/offices`;
  return this.http.get<any[]>(url);
}
}
