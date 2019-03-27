import { Component, OnInit, ViewChild, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { ApproveRequestsDataSource } from './approve-requests-datasource';
import { ApiService } from '../api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ItemRequestModel } from '../models/request';

@Component({
  selector: 'app-approve-requests',
  templateUrl: './approve-requests.component.html',
  styleUrls: ['./approve-requests.component.scss']
})
export class ApproveRequestsComponent implements OnInit {
  dataSource: ApproveRequestsDataSource;
  selection = new SelectionModel<ItemRequestModel>(true, []);


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'item', 'name', 'subject', 'use', 'quantity', 'date', 'approved'];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private cdr: ChangeDetectorRef) {
  }

  approve() {
    const approve: ItemRequestModel[] = new Array();
    this.dataSource.data.forEach(
      row => {
        if (this.selection.isSelected(row) && !row.approved) {
          approve.push(row);
        }
      }
    );

    this.apiService.postApprove(approve).subscribe(
      messageObj => {
        console.log(messageObj.message);
        this.snackBar.open(messageObj.message, 'Okay');
        this.refresh();
      },
      err => {
        console.error(err);
      }
    );
    // console.log(approve);
  }

  refresh() {
    this.apiService.getRequests().subscribe(
      response => {
        this.dataSource.data = response;
        this.cdr.detectChanges();
        console.log(this.dataSource.data);
      }, err => {
        console.log(err);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.dataSource = new ApproveRequestsDataSource(this.apiService);
  }
}
