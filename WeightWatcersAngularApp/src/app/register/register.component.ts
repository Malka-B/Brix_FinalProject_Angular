import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { ISubscriberModel } from '../Models/ISubscriberModel.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registeredSubscriber: ISubscriberModel;
  constructor(private fb: FormBuilder, private _appService: AppService, private _router: Router) {


  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      height: ''
    })
  }

  register() {
    this.registeredSubscriber = this.registerForm.value;
    this.registeredSubscriber.height = +this.registeredSubscriber.height;
    this._appService.register(this.registeredSubscriber).subscribe({
      next:
        r => {
          debugger;
          this._router.navigate(["/patient", r])
        }
    })

  }

}
