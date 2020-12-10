import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  private submitted = false;
  private loading = false;
  private error = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordC: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }
  register() {
    alert('in register');
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.value.password !== this.registerForm.value.passwordC) {
      alert('confirmer votre mot de passe ....!!! ');
    } else {
      // console.log(this.loginForm.value)
      this.loading = false;
      /// alert('SUCCESS!! :-)')
      
      this.userService.register(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.role).subscribe(res => {
        console.log(res);
        alert('registation successful ...!');
        window.location.reload();
        // this.state = res.token;
        // console.log(this.state)
        //localStorage.setItem('token', res.token);
        //this.router.navigate(['home']);
      },(error) => {
        this.error = error;
        alert('user already exists');
      });
      
      
      // localStorage.setItem("connect", "true");

    }
  }
}
