import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  input1: string;
  input2: string;

  number1: number;
  number2: number;

  result: string;
  operator: string;

  changeOperator(operator) {
    this.operator = operator
  }

  getSum() {
    return this.number1 + this.number2;
  }

  getSub() {
    return this.number1 - this.number2;
  }

  getMult() {
    return this.number1 * this.number2;
  }

  getDiv() {
    return this.number1 / this.number2;

  }

  getResult() {

    if (isNaN(Number(this.input1)) || isNaN(Number(this.input2))) {
      this.result = "Error! not a number!";
    }

    this.number1 = Number(this.input1);
    this.number2 = Number(this.input2);

    if (this.operator == "+") {
      this.result = this.getSum().toString();
    }

    if (this.operator == "-") {
      this.result = this.getSub().toString();
    }

    if (this.operator == "*") {
      this.result = this.getMult().toString();
    }

    if (this.operator == "/") {
      this.result = this.getDiv().toString();
    }
  }

  buttonClick(operator) {
    this.changeOperator(operator);
    this.getResult();
  }

  ngOnInit(): void {
    this.operator = "+";
  }

}
