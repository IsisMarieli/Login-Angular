import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { InputComponent } from "./components/input/input.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkButtonComponent, InputComponent, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login';

  protected form!: FormGroup;
  protected emailField: any;
  protected passwordField: any;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      emailField: [null, [Validators.required, Validators.email]],
      passwordField: [null, [Validators.required, Validators.minLength(6)]]
    })

    this.emailField = this.form.get('emailField');
    this.passwordField = this.form.get('passwordField');
  }

  protected submit(){
    if(this.form.invalid) return;

    const { emailField, passwordField } = this.form.getRawValue()
    console.log(`Logando usuário... Email: ${emailField} password: ${passwordField}`);

    // console.log(this.form.getRawValue());
    // console.log(this.form.getRawValue());
    // const emailValue = this.form.get("emailField")
    // const passswordValue = this.form.get("passswordField")


    // console.log(emailValue?.value);
    // console.log(passswordValue?.value);
  }
}
