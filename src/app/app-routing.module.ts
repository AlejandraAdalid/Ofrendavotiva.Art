import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { SingleCategoriaComponent } from './paginas/single-categoria/single-categoria.component';
import { SinglePostComponent } from './paginas/single-post/single-post.component';
import { AboutComponent } from './paginas/about/about.component';
import { TermsAndConditionComponent } from './paginas/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'categoria', component: SingleCategoriaComponent},
  {path:'post', component: SinglePostComponent},

  {path:'about', component:AboutComponent },
  {path:'term-condition', component: TermsAndConditionComponent},
  {path:'contact', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
