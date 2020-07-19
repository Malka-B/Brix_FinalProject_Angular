import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public pageTitle = 'Welcome';
  hide = true;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _appService: AppService, private _router: Router) {


  }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: null
    })
  }


  login() {
    this._appService.login(this.loginForm.value).subscribe({
      next: accountId => {
        this.loginForm.reset();
        if (accountId != null) {
          debugger;
          this._router.navigate(["/accountDetail", accountId]);
        }
        else {
          alert("let's register now!");
        }
      },
      error: err => {
        this.loginForm.reset();
        alert(err)
      }
    })
  }

}
