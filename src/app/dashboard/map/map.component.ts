import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Location } from '../../models/location';
import { LocationService } from '../services/location.service';
import { map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { AuthService } from '../../login/loginservices/auth.service';
import { AddlocationComponent } from "../addlocation/addlocation.component";
import { MatDialog } from '@angular/material';


declare const L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  public locations: Location[] = [];

  latitude: number = 8.793960;
  longitude: number = 51.724837;
  closeResult: string;
  locationAddForm: FormGroup;
  model: Location;
  token: string;
  dialogResult: string;

  public map: any;
  constructor(private _locationService: LocationService, public modalServiceAdd: NgbModal, private authservice: AuthService, public dialog: MatDialog) {
  }

  loadLocations() {
    this._locationService.getLocations()
      .subscribe((locations: Location[]) => {
        this.locations = locations;
        console.log('data from data service: '+ this.locations[1].name);

        var LocMarker = L.icon({
          iconUrl: '../../assets/image/marker2.png',
          iconSize: [58, 65], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [8, -76] // point from which the popup should open relative to the iconAnchor
        });

        for (var i = 0; i < this.locations.length; i++) {
          L.marker([this.locations[i].latitude, this.locations[i].longitude], { icon: LocMarker }).addTo(this.map)
            .bindPopup('<table style="width:100%;"><tr><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;"><strong>Site ID: </strong></td><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;">' + this.locations[i].id + '</td>' + '</tr><tr><td  style="border:1px solid #cacaca; padding:5px 5px; margin:5px;"><strong>Site Name: </strong></td><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;">' + this.locations[i].name + '</td>' + '</tr><tr><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;"><strong>IP Address: </strong></td><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;">' + this.locations[i].ipAddress + '</td></tr><tr><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;"><strong>Status: </strong></td><td style="border:1px solid #cacaca; padding:5px 5px; margin:5px;">' + this.locations[i].status + '</td></tr></table><br><a style="font-size:12px; background-color:#f60; color:#fff; border:none;" class="btn btn-primary">Details</a>');
        }
      });
  }

  login() {
    this.authservice.getAuthenticated("admin", "ecue")
      .pipe(first())
      .subscribe(
        data => {
          this.token = data.token
          localStorage.setItem("authToken", this.token)
        });
  }

  ngOnInit() {
    //this._locationService.getLocations();
    this.login();
    this.loadLocations();
    this.locationAddForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'ipAddress': new FormControl('', [Validators.required]),
      'serverLogin': new FormControl('', [Validators.required]),
      'serverPassword': new FormControl('', [Validators.required]),
      'sympAddress': new FormControl('', [Validators.required]),
      'longitude': new FormControl('', [Validators.required]),
      'latitude': new FormControl('', [Validators.required])
    })

    /* Defied the default map along with its latitude and longitude values to initially appear in the dashboard */
    this.map = L.map('map').setView([51.71905, 8.75439], 14);
    this.map.zoomControl.setPosition('topright');
    this.map.doubleClickZoom.disable();
    console.log(this.map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    var clicked = 0;
    var marker = L.marker([this.latitude, this.longitude], { draggable: true });
    this.map.on('dblclick', this.createNewLocationWithCoords, this);
  }

  createNewLocationWithCoords(event) {
    const dialogRef = this.dialog.open(AddlocationComponent, {
      width: '400px',
      data: { lat: event.latlng.lat, lng: event.latlng.lng }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'Cancel') {
      }
    });
  }


  get name() { return this.locationAddForm.get('name'); }
  get ipAddress() { return this.locationAddForm.get('ipAddress'); }
  get serverLogin() { return this.locationAddForm.get('serverLogin'); }
  get serverPassword() { return this.locationAddForm.get('serverPassword'); }
  get sympAddress() { return this.locationAddForm.get('sympAddress'); }
}
