import {Component, Input, OnInit} from '@angular/core';
import {Specialization} from "../class.definitions";

@Component({
             selector: 'app-spot',
             templateUrl: './spot.component.html',
             styleUrls: ['./spot.component.css']
           })
export class SpotComponent implements OnInit {
  name: string = '';
  image: string = '';
  @Input()
  specialization ?: Specialization = undefined;
  core: string = '';
  smallerFont: boolean = false

  ngOnInit(): void {
    if (this.specialization) {
      this.name = this.specialization.name;
      this.image = 'assets/img/' + this.specialization.img + '.png';
      this.core = this.specialization.core;
      this.smallerFont = this.name.length > 12
    }
  }

}
