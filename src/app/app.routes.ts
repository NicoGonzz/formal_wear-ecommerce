import { Routes } from '@angular/router';
import { UsersiteComponent } from './usersite/usersite.component';
import { SignInComponent } from './usersite/sign-in/sign-in.component';
import { SignUpComponent } from './usersite/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-up',
        pathMatch: 'full',
    },
    {
        path: 'usersite', //canActivate: [permissionsGuard],
        component: UsersiteComponent,
    },
    {
        path: 'sign-in', //canActivate: [permissionsGuard],
        component: SignInComponent,
    },
    {
        path: 'usersite', //canActivate: [permissionsGuard],
        component: UsersiteComponent,
    },
    {
        path: 'sign-up', //canActivate: [permissionsGuard],
        pathMatch: 'full',
        component: SignUpComponent,
    },
    {
      path: 'user-dashboard', //canActivate: [permissionsGuard],
      component: NavbarComponent,
    }
];
