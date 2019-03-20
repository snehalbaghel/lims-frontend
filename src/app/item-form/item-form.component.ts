import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  constructor() { }
  storagePlaces = ['Store Room', 'Cold Room', '-20° Deep Freezer', '-80° Deep Freezer'];
  chemicalTypes = ['Biochemical', 'Fine Chemical', 'Solvent', 'Acid', 'Base'];
  chemicalNatures = ['Solid', 'Liquid'];
  ngOnInit() {
  }

}
