import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent{
  constructor() { }
 
  role = new FormControl();
  onChange() {
    console.log(this.role.value);
  }
}
