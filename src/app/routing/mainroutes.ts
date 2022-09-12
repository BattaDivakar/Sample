import { HomeComponent } from "../home/home.component";


export const Mainroutes = [
  {path:'', component:HomeComponent},
  {path:'customer', loadChildren :() =>import('../customer/customer.module').then(x=>x.CustomerModule)},
  {path:'supplier', loadChildren:() =>import('../supplier/supplier.module').then(x=>x.SupplierModule)},
  {path:'home', component:HomeComponent},
]