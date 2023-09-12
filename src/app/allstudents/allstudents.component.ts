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

  public limit:any = [];
  public page:any = [];

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

  // pagination

  getpage(){
    this._studentsService.getPagedstudents(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }

  deleteStudents(id:any) {
    this._studentsService.deletestudents(id).subscribe(
      (data: any) => {
        alert("deleted succesfully");
        location.reload();
      },
      (err:any) => {
        alert("Internal server error")
      }
    )
  }

  


}
