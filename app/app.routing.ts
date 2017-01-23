import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { TestPageComponent } from './test-page/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test-page', component: TestPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);