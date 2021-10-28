import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['menu']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
