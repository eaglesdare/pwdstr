import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}
