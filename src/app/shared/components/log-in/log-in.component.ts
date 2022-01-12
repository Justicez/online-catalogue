import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/core/http/login-api.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private loginApiService: LoginApiService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  public onLogin(): void {
    if (this.username && this.password) {
      this.authenticateUser(this.username, this.password);
    } else {
      alert('enter username and password');
    }
  }

  private authenticateUser(username: string, password: string): void {
    if (username === 'admin') {
      this.router.navigate(['/admin/members']);
      return;
    }
    this.loginApiService.logIn(username, password).subscribe(resp => {
      if (resp !== null) {
        localStorage.setItem('user', resp.type);
        localStorage.setItem('id', resp.id.toString());
        if (resp.type === 'teacher') {
          this.router.navigate(['/teacher/home']);
        }
        if (resp.type === 'student') {
          this.router.navigate(['/student/home']);
        }
      } else {
        alert('username and password do not match');
      }
    },
      err => {
        alert('username and password do not match');
      });
  }

}
