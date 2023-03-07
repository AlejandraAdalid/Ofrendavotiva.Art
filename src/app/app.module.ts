import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './diseño/header/header.component';
import { CategoriaNavbarComponent } from './diseño/categoria-navbar/categoria-navbar.component';
import { FooterComponent } from './diseño/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { SingleCategoriaComponent } from './paginas/single-categoria/single-categoria.component';
import { SinglePostComponent } from './paginas/single-post/single-post.component';
import { TermsAndConditionComponent } from './paginas/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './paginas/contact-us/contact-us.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { AboutComponent } from './paginas/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriaNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoriaComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    CommentListComponent,
    CommentFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
