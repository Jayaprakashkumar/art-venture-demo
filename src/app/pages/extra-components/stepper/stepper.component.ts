import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  // firstForm: FormGroup;
  // secondForm: FormGroup;
  // thirdForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

/* Using the kind examples here
   https://codepen.io/ezos86/pen/NqxKzy
   https://codepen.io/slatiner/pen/Gmxle
*/
  }

    timeline_event:{year:any, description:String, place : String}[] =
      [
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1946-49,
          description:"Studies at The Cooper Union",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        },
        {
          year:1927,
          description:"Born July 24 in Brooklyn",
          place:"New York."
        }

      ]
  
     
}



  //   this.firstForm = this.fb.group({
  //     firstCtrl: ['', Validators.required],
  //   });

  //   this.secondForm = this.fb.group({
  //     secondCtrl: ['', Validators.required],
  //   });

  //   this.thirdForm = this.fb.group({
  //     thirdCtrl: ['', Validators.required],
  //   });
  // }

  // onFirstSubmit() {
  //   this.firstForm.markAsDirty();
  // }

  // onSecondSubmit() {
  //   this.secondForm.markAsDirty();
  // }

  // onThirdSubmit() {
  //   this.thirdForm.markAsDirty();
  // }

