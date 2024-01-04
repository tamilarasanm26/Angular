
import  {Routes} from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

export const routes: Routes = [
    {path:'empl_det',component:EmployeedetailsComponent},
    {path:'empl_list',component:EmployeeslistComponent},
    {path:'create',component:CreateemployeeComponent},
    
    
];