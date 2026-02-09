import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // ,outputs: ['changeOfValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeOfValue = new EventEmitter();

  @ViewChild('inputField') inputFieldValue: ElementRef;

  increase() {
    this.inputFieldValue.nativeElement.value++;
    this.changeOfValue.emit({currentValue: this.value});
  }

  decrease() {
    this.inputFieldValue.nativeElement.value--;
    this.changeOfValue.emit({currentValue: this.value});
  }

  constructor() { }

  ngOnInit() {
  }

}
