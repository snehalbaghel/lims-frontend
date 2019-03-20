import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private router: Router, private usrService: UserService) { }

  login() {
    this.usrService.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home']);
        },
        err => {
          console.error(err);
        }
      );
  }

  ngOnInit() {
  }

}
