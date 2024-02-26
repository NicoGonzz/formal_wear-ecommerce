import { Routes } from '@angular/router';
import { UsersiteComponent } from './usersite/usersite.component';
import { Component } from '@angular/core';
import { SignInComponent } from './usersite/sign-in/sign-in.component';
import { SignUpComponent } from './usersite/sign-up/sign-up.component';

export const routes: Routes = [
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
];
