import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { Employee } from './empinterface';
@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css'],
})
export class EmphomeComponent implements OnInit {
  constructor(private _http: EmpdataService) {}

  ngOnInit(): void {}

  empData: Employee[] = [];

  getEmpData() {
    this._http.getEmployeeData().subscribe((data: any) => {
      // console.log(data);
      this.empData = data.data;
      console.log(this.empData);
    });
  }

  addEmployee() {}

  updateEmployee() {
    this._http.updateEmployeeData().subscribe();
  }

  deleteEmployee() {}
}
