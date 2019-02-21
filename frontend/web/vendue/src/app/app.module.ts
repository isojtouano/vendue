import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarketComponent } from './market/market.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { BidComponent } from './bid/bid.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { MarketService } from './market.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MarketComponent,
    LoginComponent,
    DashboardComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path:'logout', redirectTo: 'home', pathMatch: 'full' },
      { path:'home', component: HomeComponent },
      { path:'market', component: MarketComponent },
      { path:'login', component: LoginComponent },
      { path:'dashboard', component: DashboardComponent, canActivate: [ AuthenticationGuard ] },
      { path:'bid', component: BidComponent, canActivate: [ AuthenticationGuard ] }
    ])
  ],
  providers: [AuthenticationService, AuthenticationGuard, MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
