import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { UtilityService } from 'app/ems/services/utility.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router,
     private utility:UtilityService) { }

  ngOnInit() {
      this.utility.isLogged().then((result: boolean) => {
      console.log("result123");
      console.log(result);
      if (!result) {
        this.router.navigate(['/login']);
      }
    })
  }

model = new Employee();
  addEmployee(){
      this.empService
        .addEmployee(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
