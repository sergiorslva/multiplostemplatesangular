import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TemplateComponent } from './shared/template/template.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent    
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
