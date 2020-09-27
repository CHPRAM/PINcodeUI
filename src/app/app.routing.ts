import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddPincodeComponent} from './pincode/add-pincode/add-pincode.component';
import {ListPincodeComponent} from './pincode/list-pincode/list-pincode.component';
import {EditPincodeComponent} from './pincode/edit-pincode/edit-pincode.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-pincode', component: AddPincodeComponent },
  { path: 'list-pincode', component: ListPincodeComponent },
  { path: 'edit-pincode', component: EditPincodeComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
