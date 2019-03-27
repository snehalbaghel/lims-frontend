import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserModel } from '../models/user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-li-dashboard',
  templateUrl: './li-dashboard.component.html',
  styleUrls: ['./li-dashboard.component.css']
})
export class LiDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  currentUser$: Observable<UserModel>;

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) {
    this.currentUser$ = userService.user();
  }
}
