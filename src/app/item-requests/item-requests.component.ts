import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ItemRequestsDataSource } from './item-requests-datasource';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-requests',
  templateUrl: './item-requests.component.html',
  styleUrls: ['./item-requests.component.scss']
})
export class ItemRequestsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ItemRequestsDataSource;

  constructor(private apiService: ApiService) {

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['item', 'name', 'subject', 'use', 'quantity', 'date', 'approved'];

  ngOnInit() {
    this.dataSource = new ItemRequestsDataSource(this.paginator, this.apiService);
  }
}
