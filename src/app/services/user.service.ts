import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();
  constructor(private apiService: ApiService) {
    this.loadUsers();
  }


  loadUsers() {
    this.apiService.getUsers().subscribe((users) => {
      this.usersSubject.next(users);
    })
  }

  getUsers(){
    return this.users$;
  }
}
