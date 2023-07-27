import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/user');
  }

  postUsers(userData: any) {
    return this.http.post('http://localhost:3000/user', userData)
  }

  getUserById(id: any) {
    return this.http.get(`http://localhost:3000/user?registerEmail=${id}`)
  }

  updateUser(id: any, inputData: any) {
    return this.http.put(`http://localhost:3000/user/${id}`, inputData)
  }
}
