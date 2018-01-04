import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from '../.././user';



@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {
    // the long way
  //   this.myForm = new FormGroup({
  //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
  //     address: new FormGroup({
  //         street: new FormControl('', <any>Validators.required),
  //         postcode: new FormControl('8000')
  //     })
  // });

      // the short way
      this.myForm = this._fb.group({
        image: ['', [<any>Validators.required]],
        name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        address: this._fb.group({
            street: ['', <any>Validators.required],
            postcode: ['']
        })
    });



  }

  save(model: User, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
}


}
