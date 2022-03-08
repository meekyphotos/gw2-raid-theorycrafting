import {Component, Input, OnInit} from '@angular/core';
import {Specialization} from "../class.definitions";
import {FormControl} from "@angular/forms";

@Component({
             selector: 'app-spot',
             templateUrl: './spot.component.html',
             styleUrls: ['./spot.component.css']
           })
export class SpotComponent implements OnInit {
  name: string = '';
  image: string = '';
  @Input()
  editable: boolean = false
  @Input()
  specialization ?: Specialization = undefined;
  core: string = '';
  smallerFont: boolean = false

  ngOnInit(): void {
    if (this.specialization) {
      this.name = this.specialization.name;
      this.control.setValue(this.specialization.name)
      this.image = 'assets/img/' + this.specialization.img + '.png';
      this.core = this.specialization.core;
      this.smallerFont = this.name.length > 12
    }
  }

  changedValue($event: string | number) {
    if (typeof $event == 'string') {
      this.name = $event;
      if (this.specialization) {
        this.specialization.name = $event;
      }
    }
  }
  control = new FormControl(this.name)
  update() {
    this.name = this.control.value;
    if (this.specialization) {
      this.specialization.name = this.control.value;
    }
  }
  cancel() {
    this.control.setValue(this.name)
  }
}
