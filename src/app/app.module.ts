import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatsComponent } from './stats/stats.component';
import { RolesComponent } from './roles/roles.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'roles', component: RolesComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'home', component: HomeComponent},
];

export class AppRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatsComponent,
    RolesComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
