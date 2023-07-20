import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL!: 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URL);
  }

  postUsers(userDate: any) {
    return this.http.post(this.URL, userDate)
  }

  getUserById(id: any) {
    return this.http.get(this.URL + '/' + id)
  }

  updateUser(id: any, inputDate: any) {
    return this.http.put(this.URL + '/' + id, inputDate)
  }
}
