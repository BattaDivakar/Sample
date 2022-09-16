import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { user } from '../model/userdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor( private _service : LoginServiceService, private _router:Router) { }
  UserDataModel : user = new user();

  ngOnInit(): void {
  }

  loginUser()
  {
    this._service.loginUser(this.UserDataModel).subscribe(res =>{
      console.log("hi");
      alert("hi");
      localStorage.setItem('token', res.token);
      this._router.navigate(["customer/add"])
    }, res=> console.log(res));
  }

}
