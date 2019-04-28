import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.employeeService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if(this.employeeService.form.valid){
      if (this.employeeService.form.get('id').value == null)
        this.employeeService.insertEmployee(this.employeeService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false,3000);
      this.submitted = false;
    }
    //else
    //update
  }

}
