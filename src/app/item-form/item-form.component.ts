import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-info-dialog',
  templateUrl: 'info-dialog-component.html'
})
export class InfoDialogComponent {
  constructor(private dialogRef: MatDialogRef<InfoDialogComponent>,  @Inject(MAT_DIALOG_DATA) private data: DialogData) {
  }

  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    bottle_no: new FormControl(null, Validators.required),
    cat_no: new FormControl(null, Validators.required),
    brand: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    nature: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    mol_weight: new FormControl(null, Validators.required),
    mol_formula: new FormControl(null, Validators.required),
    purity: new FormControl(null, Validators.required),
    storage_temperature_min: new FormControl(null, Validators.required),
    storage_temperature_max: new FormControl(null, Validators.required),
    storage_place: new FormControl(null, Validators.required),
    risk_phrases: new FormControl(null, Validators.required),
    safety_phrases: new FormControl(null, Validators.required),
    p_statements: new FormControl(null, Validators.required),
    h_statements: new FormControl(null, Validators.required),
    other_instructions: new FormControl(null, Validators.required),
  });

  constructor(private apiService: ApiService, private dialog: MatDialog) { }
  storagePlaces = ['Store Room', 'Cold Room', '-20° Deep Freezer', '-80° Deep Freezer'];
  chemicalTypes = ['Biochemical', 'Fine Chemical', 'Solvent', 'Acid', 'Base'];
  chemicalNatures = ['Solid', 'Liquid'];
  ngOnInit() {
  }

  submit() {
    let formValue = this.itemForm.value;

    formValue.storage_temperature = {
      min: formValue.storage_temperature_min,
      max: formValue.storage_temperature_max
    };

    delete formValue.storage_temperature_min;
    delete formValue.storage_temperature_max;
    // console.log(formValue);
    this.apiService.postItem(formValue)
      .subscribe(
        info => {
          console.log(info);
          this.dialog.open(InfoDialogComponent, {
            width: '250px',
            data: {message: info['message']}
          });
          // this.dialog.open()
          // open dialog
        },
        err => {
          console.error(err);
        }
      );

  }

}

