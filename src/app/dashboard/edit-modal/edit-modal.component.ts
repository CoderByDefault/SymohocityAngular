import { Component, OnInit, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location } from '../../models/location';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.sass']
})
export class EditModalComponent implements OnInit {

  constructor(public editDialog: MatDialogRef<EditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Location) { }

  editForm: FormGroup;

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'ipAddress': new FormControl('', [Validators.required]),
      'serverLogin': new FormControl('', [Validators.required]),
      'serverPassword': new FormControl('', [Validators.required]),
      'sympAddress': new FormControl('', [Validators.required]),
      'longitude': new FormControl('', [Validators.required]),
      'latitude': new FormControl('', [Validators.required])
    })
  }
  get name() { return this.editForm.get('name'); }
  get ipAddress() { return this.editForm.get('ipAddress'); }
  get serverLogin() { return this.editForm.get('serverLogin'); }
  get serverPassword() { return this.editForm.get('serverPassword'); }
  get sympAddress() { return this.editForm.get('sympAddress'); }
  get longitude() { return this.editForm.get('longitude'); }
  get latitude() { return this.editForm.get('latitude'); }

  onEditConfirm() {
    this.editDialog.close('Confirm');
  }

  onEditCancel() {
    this.editDialog.close('Cancel');

  }
  

}
