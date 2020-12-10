import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {Utilisateur} from '../../../Utilisateur';




@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }
  public admin = false;
  public utilisateur = false;
  public roles: Utilisateur;
  ngOnInit() {
    this.getRoleUser();
  }
getRoleUser() {
    this.userService.api().subscribe(data => {
      console.log(data);
      this.roles = data;
      if (this.roles.role === "role_admin") {
        this.admin = true;
      } else if (this.roles.role === "role_user") {
        this.utilisateur = true;
      }
    });
  }

}
