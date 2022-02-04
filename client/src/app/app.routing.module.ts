import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'upload', component: UploadComponent },
  { path: '', component: SearchComponent },
  { path: '**', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
