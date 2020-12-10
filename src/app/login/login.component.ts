import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Utilisateur} from '../../Utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public loading = false;
  public error = '';
  public state;
  public admin = false;
  public utilisateur = false;
  roles: Utilisateur;
  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.loginForm.controls; }
  connex() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // console.log(this.loginForm.value)
    this.loading = true ;

    /// alert('SUCCESS!! :-)')

     this.userService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((res: any) => {
      console.log(res);
      // this.state = res.token;
      // console.log(this.state)
      alert('connexion successful ..!');
      localStorage.setItem('token', res.token);
      this.router.navigate(['home/vehicule']);
    }, (error) => {
      this.error = error;
      alert('error login or password');
      this.loading = false;
    });

   // localStorage.setItem("connect", "true");
    this.getRoleUser();
  }
  getRoleUser(): void {
    this.userService.api().subscribe(data => {
      console.log(data);
      this.roles = data;
    });
  }
}
