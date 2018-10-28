import { Component, OnInit } from '@angular/core';
import {AuthService} from '../register/validate/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidateService } from '../register/validate/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
  };
  this.myParams = {
    particles: {
        number: {
            value: 200,
        },
        color: {
            value: '#ff0000'
        },
        shape: {
            type: 'triangle',
        },
}
};
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isInvalidForm(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  isRequired(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }

  loginUser() {
    this.authService.login(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(['/']);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
