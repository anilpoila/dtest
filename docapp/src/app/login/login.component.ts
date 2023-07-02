import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  public login = {
    log_user: null,
    log_pwd: null,
    is_rmbr: true,
  };

  public getRoles: any = [];
  constructor(private _myService: ServiceService, private _router: Router) {}

  ngOnInit() {
    this._myService.getRoles().subscribe((data: any) => {
      data.data.forEach((name: { role_name: any; role_id: any }, nIn: any) => {
        this.getRoles.push({ label: name.role_name, value: name.role_id });
      });
    });
    console.log('this.getRoles', this.getRoles);
  }

  ngAfterViewInit() {}

  onLoginClick() {
    let login = JSON.parse(JSON.stringify(this.login));
    if (login.log_user == 'Jay') {
      let assignRole = 'DOC';
      let assignRoute = _.filter(this.getRoles, { value: assignRole });
      if (assignRoute.length > 0) {
        assignRole = 'landing/docvisits';
        localStorage.setItem('docName', JSON.stringify(login.log_user));
      } else {
        assignRole = 'login';
        localStorage.removeItem('docName');
      }
      this._router.navigateByUrl(assignRole);
    }
  }
}
