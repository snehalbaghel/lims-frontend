import { DataSource } from '@angular/cdk/collections';
import { Observable, of as observableOf, merge } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ItemRequestModel } from '../models/request';
import { ApiService } from '../api.service';

/**
 * Data source for the ApproveRequests view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ApproveRequestsDataSource extends DataSource<ItemRequestModel> {
  data: ItemRequestModel[];

  constructor(private apiService: ApiService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ItemRequestModel[]> {

    return observableOf(this.data).pipe(
      mergeMap(() => this.apiService.getRequests().pipe(
        map((response) => {
          this.data = response;
          return response;
        })
      ))
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}
}

