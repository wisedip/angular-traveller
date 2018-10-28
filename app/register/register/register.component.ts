import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../register/validate/validate.service';
import {AuthService} from '../register/validate/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata: any = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.formdata = {};
  }

  registerUser() {
    this.authService.register(this.formdata).subscribe(
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
        this.toastr.success('Log In to Continue', 'Registered');
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
