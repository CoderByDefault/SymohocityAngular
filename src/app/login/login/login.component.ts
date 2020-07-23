import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthloginService } from '../loginservices/authlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private authloginService: AuthloginService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessageName() {
    return this.loginForm.hasError('required') ? 'Username is required field' :
      this.loginForm.hasError('username') ? 'Not a valid name' :
        '';
  }
  getErrorMessagePwd() {
    return this.loginForm.hasError('required') ? 'Password is required field' :
      '';
  }

  login() {
    this.authloginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(() => {
      this.router.navigate(['/dashboard']);
    })
  }
}
