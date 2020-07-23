import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Location } from '../../models/location';
import { Controller } from '../../models/controller';
import { Sequence } from '../../models/sequence';
import { LocationService } from '../services/location.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  locationForm = this.fb.group({
    name: ['', Validators.required],
    ipaddress: ['', Validators.required, Validators.pattern['^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$']],
    serverlogin: ['', Validators.required],
    password: ['', Validators.required,],
    address: ['', Validators.required],
    longitude: ['', Validators.required],
    latitude: ['', Validators.required]
  });

  @Input() drawer: any;
  public locations: Location[] = [];
  public controllers: Controller[] = [];
  public sequences: Sequence[] = [];
  show_dialog: boolean = false;
  private show_dialog_edit: boolean = false;
  private show_dialog_icon: boolean = false;
  closeResult: string;
  public token: string;
  model: Location;
  dialogResult: string;

  constructor(private _locationService: LocationService, public modalService: NgbModal, public dialog: MatDialog, private fb: FormBuilder) { }

  loadLocations() {
    this._locationService.getLocations()
      .subscribe((locations: Location[]) => {
        this.locations = locations;

        locations.forEach(element => {
          //console.log(element.ipAddress)
          this.loadControllers(element.ipAddress);
          this.loadSequences(element.ipAddress);
        });

      });
  }
  loadControllers(ip: string) {
    this.token = localStorage.getItem("authToken");
    this._locationService.getControllers(this.token, ip)
      .subscribe((controllers: Controller[]) => {
        this.controllers = controllers;
        console.log('data  ' + this.controllers);
      });
  }

  loadSequences(ip: string) {
    this.token = localStorage.getItem("authToken");
    this._locationService.getSequences(this.token, ip)
      .subscribe((sequences: Sequence[]) => {
        this.sequences = sequences;
        console.log('data from data service: ' + this.sequences[0].identifier);
      });
  }


  ngOnInit(): void {
    this.loadLocations();


    this.locationForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'ipaddress': new FormControl('', [Validators.required]),
      'serverlogin': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'longitude': new FormControl('', [Validators.required]),
      'latitude': new FormControl('', [Validators.required])
    })
  }

  getErrorMessageName() {
    return this.locationForm.hasError('required') ? 'Name is required field' :
      this.locationForm.hasError('name') ? 'Not a valid name' :
        '';
  }
  getErrorMessageIpaddress() {
    return this.locationForm.hasError('required') ? 'IP Address is required field' :
      this.locationForm.hasError('ipaddress') ? 'Not a valid IP Address' :
        '';
  }
  getErrorMessageServerlogin() {
    return this.locationForm.hasError('required') ? 'Server Login is required field' :
      this.locationForm.hasError('serverlogin') ? 'Not a valid Server Login' :
        '';
  }
  getErrorMessageServerpassword() {
    return this.locationForm.hasError('required') ? 'Server Password is required field' :
      this.locationForm.hasError('serverPassword') ? 'Not a valid Server Password' :
        '';
  }
  getErrorMessageSympAddress() {
    return this.locationForm.hasError('required') ? 'Symphocity is required field' :
      this.locationForm.hasError('longitude') ? 'Not a valid Symphocity' :
        '';
  }
  getErrorMessageLongitude() {
    return this.locationForm.hasError('required') ? 'Longitude is required field' :
      this.locationForm.hasError('latitude') ? 'Not a valid Longitude' :
        '';
  }
  getErrorMessageLatitude() {
    return this.locationForm.hasError('required') ? 'Latitude is required field' :
      this.locationForm.hasError('latitude') ? 'Not a valid Latitude' :
        '';
  }

  openDeleteDialog(location: Location, id: string) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px',
      data: { name: location.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'Cancel') {
        this.removeAt();
      }
    });
  }
  removeAt() {
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'Cancel') {
      }
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  toggleedit() {

    this.show_dialog_edit = !this.show_dialog_edit;
  }

  // method to add the location on form submit
  onSubmit(): void {
    this.model = this.locationForm.value;
    //console.log("this is the model to push", this.model);
  }

}
