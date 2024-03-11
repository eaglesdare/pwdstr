import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  inputType: 'password' | 'text' = 'password';

  toggleInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
