import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private dbUrl = './assets/db.json'

  constructor(private http: HttpClient) { }

//   submitProfileForm(formData: any): Observable<any> {
//     console.warn('Form data submitted:', formData);
//     return this.http.post(this.dbUrl, formData);
// }

submitProfileForm(formData: any): void {
  console.warn('Form data submitted:', formData);

  const stringifiedData = JSON.stringify(formData);

  localStorage.setItem('profileFormData', stringifiedData);
}


getStories(): Observable<any[]> {
  return this.http.get<any[]>(this.dbUrl);
}


}
