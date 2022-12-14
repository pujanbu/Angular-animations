import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './routes/home.component';
import {BasicComponent} from './routes/basic.component';
import {ContainedComponent} from './routes/contained.component';
import {AdvancedComponent} from './routes/advanced.component';
import {NotFoundComponent} from './routes/notfound.component';

const animationRoutes:Routes = [
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  }
];
@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      BasicComponent,
      ContainedComponent,
      AdvancedComponent
    ],
    imports: [
        BrowserModule, 
        RouterModule.forRoot(animationRoutes),
        AppRoutingModule, 
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
