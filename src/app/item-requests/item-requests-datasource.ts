import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ItemRequestModel } from '../models/request';
import { ApiService } from '../api.service';
/**
 * Data source for the ItemRequests view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ItemRequestsDataSource extends DataSource<ItemRequestModel> {
  data: ItemRequestModel[]; // = EXAMPLE_DATA;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private paginator: MatPaginator, private apiService: ApiService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ItemRequestModel[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
     // observableOf(this.data),
      this.paginator.page
    ];

    // Set the paginator's length
    // this.paginator.length = this.data.length;
   // this.apiService.getRequests().subscribe((data) => {
   //   console.log(data);
   // })
    return this.apiService.getRequests();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: ItemRequestModel[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getSortedData(data: ItemRequestModel[]) {
  //  if (!this.sort.active || this.sort.direction === '') {
  //    return data;
  //  }
  //
  //  return data.sort((a, b) => {
  //    const isAsc = this.sort.direction === 'asc';
  //    switch (this.sort.active) {
  //      case 'name': return compare(a.indenter_id['name'], b.indenter_id['name'], isAsc);
  //      case 'id': return compare(+a.id, +b.id, isAsc);
  //      default: return 0;
  //    }
  //  });
  //}
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
