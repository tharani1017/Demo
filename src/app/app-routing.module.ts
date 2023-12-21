import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { GetdetailsComponent } from './getdetails/getdetails.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';

const routes: Routes = [  { path: 'getdetails/:id', component: GetdetailsComponent }, // Use ':id' to capture the parameter
{ path: 'updatedetails/:id', component: UpdatedetailsComponent },  
{ path: '', component: ViewListComponent },
  { path: 'view-list', component: ViewListComponent },
  {path:"adddetails",component:AdddetailsComponent},
  { path: 'get-details', component: GetdetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
