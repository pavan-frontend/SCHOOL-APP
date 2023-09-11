import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginform: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private _loginServices:LoginService,private router:Router){ }
  login(){
    console.log(this.loginform);
    
  this._loginServices.postloginform(this.loginform.value).subscribe(
      (data: any) => {
        alert("Login successfull");
        this.router.navigateByUrl("/dashboard")
        localStorage.setItem("token", data.token);
      },
      (err: any) => {
        alert("Login failed")
      }
    )
  }

  }


