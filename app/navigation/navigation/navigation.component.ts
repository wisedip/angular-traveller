import { Component, OnInit } from '@angular/core';
import {AuthService} from '../register/validate/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }

  }


