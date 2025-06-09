import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
       alert('Error loading users: ' + error.message);
      }
    });
  }

}
