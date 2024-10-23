import { Component } from '@angular/core';

@Component({
  selector: 'app-calci',
  standalone: true,
  imports: [],
  templateUrl: './calci.component.html',
  styleUrl: './calci.component.css'
})
export class CalciComponent {
  displayValue: string = '';

  appendNumber(num: string) {
    this.displayValue += num;
  }

  appendOperator(operator: string) {
    // Prevent multiple operators from being added consecutively
    if (this.displayValue !== '' && !this.isOperator(this.displayValue.slice(-1))) {
      this.displayValue += operator;
    }
  }

  clear() {
    this.displayValue = '';
  }

  calculate() {
    try {
      const result = new Function('return ' + this.displayValue)();
      this.displayValue = result;
    } catch (e) {
      this.displayValue = 'Error';
    }
  }

  isOperator(char: string) {
    return ['+', '-', '*', '/'].includes(char);
  }
}
