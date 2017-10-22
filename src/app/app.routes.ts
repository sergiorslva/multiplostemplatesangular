import { Routes, RouterModule } from '@angular/router';


//layouts
import { TemplateComponent } from './shared/template/template.component';


//Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

export const rootRouterConfig: Routes = [

    //no layout routes
    { path: 'login', component: LoginComponent },

    // layouts route with template
    {
        path: '',
        component: TemplateComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'sobre', component: AboutComponent }
        ]
    }
]
