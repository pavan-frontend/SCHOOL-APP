import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {

  public students:any = [];

  public term:any = [];

  public column:any =[];
  public order:any = [];

  constructor(private _studentsService:StudentService){
    _studentsService.getstudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  // filter
  getfilter() {
    this._studentsService.getfiltered(this.term).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert("Internal server Error")
      }
    )
  }

  // sort
  getsort(){
    this._studentsService.getsorted(this.column,this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internaal server Error")
      }
    )
  }

  


}
