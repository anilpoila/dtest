import { Component, OnInit, AfterViewInit } from '@angular/core';

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

  ngOnInit() {}

  ngAfterViewInit() {}

  onLoginClick() {
    let login = JSON.parse(JSON.stringify(this.login));
  }
}
