import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  StudentArray : any[] = [];
 
  name: string ="";
  address: string ="";
  fee: Number =0;
 
  currentStudentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };
 
    this.http.post("http://127.0.0.1:8000/student",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.getAllStudent();
    });
  }
 
 
  getAllStudent()
  {
    this.http.get("http://127.0.0.1:8000/student")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
 
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.fee = data.fee;
   this.currentStudentID = data.id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };
    
    this.http.put("http://127.0.0.1:8000/student/"+ this.currentStudentID , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Details Updated")
        this.name = '';
        this.address = '';
        this.fee  = 0;
        this.getAllStudent();
    });
  }


  setDelete(data: any)
  {
    window.confirm('Are you sure to delete?') ? this.deleteRecord(data): window.alert('Data Not Deleted');
  }
  deleteRecord(data:any)
  {
    this.http.delete("http://127.0.0.1:8000/student"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Details Deleted")
        this.getAllStudent();
    });

}
}
