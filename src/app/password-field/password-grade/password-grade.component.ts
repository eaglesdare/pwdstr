import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { PasswordGradeValue } from './password-grade-value.enum';

@Component({
  selector: 'password-grade',
  templateUrl: './password-grade.component.html',
  styleUrls: ['./password-grade.component.scss']
})
export class PasswordGradeComponent {
  _grade: PasswordGradeValue = PasswordGradeValue.Empty;

  @Input()
  set grade(grade: PasswordGradeValue) {
    this.renderer.removeClass(this.elementRef.nativeElement, `${this._grade}`);
    this._grade = grade;
    this.renderer.addClass(this.elementRef.nativeElement, `${this._grade}`);
  }
  get grade() {
    return this._grade;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
}
