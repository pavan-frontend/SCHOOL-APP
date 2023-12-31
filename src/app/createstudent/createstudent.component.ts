import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

  public studentform: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(4)]),
    class: new FormControl(),
    fatherName: new FormControl(),
    email: new FormControl("",[Validators.required]),
    dateofbirth: new FormControl(),

    // nested Forms
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl("",[Validators.required]),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    marks: new FormArray([])


  });

  get marksFormArray() {
    return this.studentform.get('marks') as FormArray;
  }

  marks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl()
      })
    )
  }

  constructor(private _studentServices: StudentService) { }

  Submit() {
    console.log(this.studentform)
    this._studentServices.createstudent(this.studentform.value).subscribe(
      (data: any) => {
        alert("Created successfully")
      },
      (err: any) => {
        alert("Internal server error")
      }

    )
  }
  delete(i:any){
    this.marksFormArray.removeAt(i)

  }




}
