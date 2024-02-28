import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) empComp!: EmployeeComponent;

  ngAfterContentInit(): void {
    console.log(this.empComp);
    this.empComp.empName = 'Ravan';
  }
}
