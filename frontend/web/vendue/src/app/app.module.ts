import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarketComponent } from './market/market.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MarketComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path:'home', component: HomeComponent },
      { path:'market', component: MarketComponent },
      { path:'login', component: LoginComponent },
      { path:'dashboard', component: DashboardComponent, canActivate: [ AuthenticationGuard ] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
