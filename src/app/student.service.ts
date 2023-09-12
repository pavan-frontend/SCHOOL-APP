import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) {}
   
    getstudents():Observable<any>{
      return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students");
    }
   
  

  getfiltered(term:any):Observable<any>{
    return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter="+term)
  }

  getsorted(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy="+column+"&order="+order)
  }


  createstudent(data:any):Observable<any>{
    return this._httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students",data)
  }

  getPagedstudents(limit:any,page:any):Observable<any>{
    return this._httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?limit="+limit+"&page="+page)
  }

  deletestudents(id:any): Observable<any> {
    return this._httpClient.delete("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id);

  }
}
