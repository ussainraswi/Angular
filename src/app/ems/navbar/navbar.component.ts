import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { UtilityService } from 'app/ems/services/utility.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private utility:UtilityService
  ) { }

  ngOnInit() {
  }

  logout() {
    console.log("LOGOUT");

    this.utility.isLogged().then((result: boolean) => {
      console.log("result123");
      console.log(result);
      if (result) {
        sessionStorage.removeItem('User');
        this.router.navigate(['/login']);
      }
    })
    
  }


}
