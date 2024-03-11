import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { PasswordInputComponent } from './password-field/password-input/password-input.component';
import { PasswordGradeComponent } from './password-field/password-grade/password-grade.component';
import { PasswordGradePipe } from './password-field/password-grade/password-grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent,
    PasswordInputComponent,
    PasswordGradeComponent,
    PasswordGradePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
