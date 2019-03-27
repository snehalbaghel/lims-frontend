import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/item';
import { ApiService } from '../api.service';
import { startWith, map, flatMap } from 'rxjs/operators';
import { ItemRequestModel } from '../models/request';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

  requestForm = new FormGroup({
    itemCtrl: new FormControl(null, Validators.required),
    quantity_num: new FormControl(null, Validators.required),
    quantity_unit: new FormControl(null, Validators.required),
    intended_use: new FormControl(null, Validators.required),
    subject_code: new FormControl(null, Validators.required)
  });
  items$: Observable<ItemModel[]>;

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {
    this.items$ = apiService.getItems();
  }

  stupidFunction(item: ItemModel) {
    return item ? item.name : item;
  }

  submit() {
    console.log(this.requestForm.value);
    let formValue = this.requestForm.value;
    formValue.quantity = {
      value: formValue.quantity_num,
      unit: formValue.quantity_unit
    };

    formValue.item_id = formValue.itemCtrl._id;
    delete formValue.itemCtrl;
    delete formValue.quantity_unit;
    delete formValue.quantity_num;

    this.apiService.postRequest(formValue).subscribe(
      messageObj => {
        console.log(messageObj.message);
        this.snackBar.open(messageObj.message, 'Okay');
      },
      err => {
        console.error(err);
      }
    );

    //console.log(formValue);
  }

  ngOnInit() {
  }

}
