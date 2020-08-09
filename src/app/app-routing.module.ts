import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';

const routes: Routes = [
    {
        path: 'intro',
        component: IntroComponent
    },{
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
    },{
        path: '**',
        redirectTo: 'intro',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
