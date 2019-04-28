import { Injectable } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase: AngularFireDatabase) { }
  employeeList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('',Validators.required),
    id: new FormControl('',Validators.required),
    dob: new FormControl(''),
    salary: new FormControl(''),
    skills: new FormControl('',Validators.required)
  });
  

  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }


  insertEmployee(employee) {
    this.employeeList.push({
      name: employee.name,
      id: employee.id,
      dob: employee.dob,
      salary: employee.salary,
      skills: employee.skills
    });
  }

}
