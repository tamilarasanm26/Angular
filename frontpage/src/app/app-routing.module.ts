import { NgModule } from "@angular/core";
import  {RouterModule, Routes} from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

const routes: Routes=[

    {path:'empl_det',component:EmployeedetailsComponent},
    {path:'empl_list',component:EmployeeslistComponent},
    {path:'create',component:CreateemployeeComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [EmployeedetailsComponent,CreateemployeeComponent,EmployeeslistComponent]