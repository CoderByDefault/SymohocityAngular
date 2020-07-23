import { Component, OnInit, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location } from '../../models/location';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.sass']
})
export class AddlocationComponent{
  constructor(public addDialog: MatDialogRef<AddlocationComponent>, @Inject(MAT_DIALOG_DATA) public data: Location) { }
  addnewlocForm: FormGroup;
  ngOnInit() {

  this.addnewlocForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'ipAddress': new FormControl('', [Validators.required, Validators.pattern['^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$']]),
    'serverLogin': new FormControl('', [Validators.required]),
    'serverPassword': new FormControl('', [Validators.required]),
    'sympAddress': new FormControl('', [Validators.required]),
    'longitude': new FormControl('', [Validators.required]),
    'latitude': new FormControl('', [Validators.required])
  })
}

onAddLocConfirm () {
  this.addDialog.close('Confirm');
}

onAddLocCancel() {
  this.addDialog.close('Cancel');

}
}
