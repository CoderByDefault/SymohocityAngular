import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileImportService } from '../calenderService/file-import.service';
import { AuthService } from '../../login/loginservices/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.sass']
})

export class CalenderComponent implements OnInit {

  profileForm: FormGroup;
  error: string;
  fileimport = { status: '', message: '', filePath: '' };
  token: string;
  width: number;
  height: number;
  bitRate: number;
  mediaLibraryFolder: string;

  constructor(private fb: FormBuilder, private fileImport: FileImportService, private authservice: AuthService,) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [''],
      sourceFilename: ['']
    });

  }

  onSelectedFile(event) {
    console.log(event.target.files);
    if (event.target.files.length > 0) {
      const sourceFilename = event.target.files[0];
      this.profileForm.get('sourceFilename').setValue(sourceFilename);

    }
  }

  onSubmit() {
    this.authservice.getAuthenticated("admin", "ecue")
    .pipe(first())
    .subscribe(
      data => {
        //console.log("token", data);
        this.token = data.token;
        //console.log("token", this.token);
        localStorage.setItem("authToken", this.token)
      });
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name').value);
    formData.append('sourceFilename', this.profileForm.get('sourceFilename').value.name);
    //console.log("sourceFilename", this.profileForm.get('sourceFilename').value);
    formData.append('mediaLibraryFolder', '' );
    formData.append('width', '10' );
    formData.append('height', '10' );
    formData.append('bitRate', '100' );
    console.log("form data", formData );
    this.fileImport.import(this.token, formData).subscribe(
      res => this.fileimport = res,
      err => this.error = err
    );                                                                                        
  }


}
