import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MyserviceService } from '../myservice.service';
import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
      ReactiveFormsModule, MatInputModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule, MatFormFieldModule
      ],
      providers: [ MyserviceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = new RegisterComponent(null,null,null);
    fixture.detectChanges();


  });
  it('should be created', () => {
        expect(component).toBeTruthy();
    });
  /* it('it checks for isValid function',() => {
    let form = new FormGroup({
      controlName: new FormControl()
    })
    component.isValid(form.get('controlName'));
    expect(component.isValid(form.get('controlName'))).toBe(false);
  })
 */
});
