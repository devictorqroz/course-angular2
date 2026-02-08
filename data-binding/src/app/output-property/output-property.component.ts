import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // ,outputs: ['changeOfValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeOfValue = new EventEmitter();

  increase() {
    this.value++;
    this.changeOfValue.emit({currentValue: this.value});
  }

  decrease() {
    this.value--;
    this.changeOfValue.emit({currentValue: this.value});
  }

  constructor() { }

  ngOnInit() {
  }

}
