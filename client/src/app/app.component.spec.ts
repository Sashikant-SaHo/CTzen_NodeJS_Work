import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainDeskComponent } from './main-desk/main-desk.component';
import { MyserviceService } from './myservice.service';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainDeskComponent,
        LoginComponent,
        RegisterComponent,
        UserDashboardComponent,
      ],
      imports:[AppRoutingModule,
      RouterModule,
      FormGroup,
      BrowserDynamicTestingModule
      ],
      providers:[MyserviceService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));


});
