import { Component, OnInit } from '@angular/core';


import { EmpService } from '../../emp.service';


import { Employee } from '../../employee';
import { User } from '../model/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AuthService } from 'app/ems/services/auth.service';
import {Message} from 'primeng/primeng';
import { UtilityService } from 'app/ems/services/utility.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


// export class LoginComponent implements OnInit {
  export class LoginComponent implements OnInit {

      private username:string;
      private password:string;
      private  msgs: Message[] = [];

    constructor(
      private router: Router,
      private _empService:EmpService,
      private authService: AuthService,       
      private utility:UtilityService,      
    ) {

    }

    ngOnInit():void {
        this.utility.isLogged().then((result: boolean) => {
          if (result) {
            console.log(result);
            this.router.navigateByUrl('/home');
            //this.router.navigate(['/home']);
            //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          } else {
            alert('login first');
            //this.router.navigateByUrl('/login');
          }
        })
    }



    public login(): void {
        let user: User = {          
          username: this.username,
          password: this.password
        }

        console.log(user)

      this._empService
        .login(this.username, this.password)
        .subscribe((employees) => {

          if (employees) {
            console.log("employees[0].id");
            console.log(employees);
            //console.log(employees[0].role);
            sessionStorage.setItem('Role', employees[0].role);
            console.log(sessionStorage.getItem('Role'));
            
            if(typeof (Storage) !== "undefined" ) {
              sessionStorage.setItem('User', user.username);
            }
                this.router.navigate(['/home']);
          } else {
            alert("Error Login Again");
          }
        
        });
      


    }



      // public login(): void {
      //   let user: User = {
      //     username: this.username,
      //     password: this.password
      //   }
      //   this.authService.login(user).then((result:boolean) => {
      //     if(result) {
      //       if(typeof (Storage) !== "undefined" ) {
      //         sessionStorage.setItem('User', user.username)
      //       }
      //       this.router.navigate(['/home']);            
      //     } else {
      //       // this.msgs.push({severity:'error', summary:'Attention', detail:'Credential Error'});
      //       alert("Username Password Invalid");
      //     }

      //   })

      // } 
  }