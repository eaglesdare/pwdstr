import { Pipe, PipeTransform } from '@angular/core';
import { PasswordGradeValue } from './password-grade-value.enum.';

@Pipe({
  name: 'passwordGrade'
})
export class PasswordGradePipe implements PipeTransform {
  transform(value: string): PasswordGradeValue {
    if (value.length === 0) {
      return PasswordGradeValue.Empty;
    }
    if (value.length < 8) {
      return PasswordGradeValue.Short;
    }

    const hasLetters = /[a-z]/i.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSymbols = /[^a-z0-9]/i.test(value);

    if (hasLetters && hasNumbers && hasSymbols) {
      return PasswordGradeValue.Strong;
    }
    if (hasLetters && hasNumbers || hasLetters && hasSymbols || hasNumbers && hasSymbols) {
      return PasswordGradeValue.Medium;
    }
    return PasswordGradeValue.Easy;
  }
}
