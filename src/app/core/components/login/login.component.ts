import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalid: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

   async login() {
     console.log(this.username);
     console.log(this.password);
      if (this.username === 'admin' && this.password === '1234') {
        this.router.navigate(['/main']);
        return;
      }
      this.invalid = true;
      this.router.navigate(['login']);
  }
}
