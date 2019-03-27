import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  currentUser$: Observable<UserModel>;
  loggedIn: boolean;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar ) {
    this.currentUser$ = userService.user();
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout()
    .subscribe(
      messageObj => {
        this.snackBar.open(messageObj.message.toString(), 'Okay' , {duration: 1000});
        this.router.navigate(['login']);
      },
      err => {
        console.error(err);
        this.snackBar.open(err.message, 'Okay' , {duration: 1000});
      }
    );

  }
}
