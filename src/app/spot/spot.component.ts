import {Component, Input, OnInit} from '@angular/core';
import {ClassPanelComponent} from "../class-panel/class-panel.component";

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.css']
})
export class SpotComponent implements OnInit {
  name: string = '';
  image: string = '';
  @Input()
  specialization: string = '';
  core: string = '';



  constructor() { }

  ngOnInit(): void {
    this.name = this.specialization;
    this.specialization = this.specialization.toLowerCase()
    this.image = '/assets/img/' + this.specialization + '.png';
    this.core = ClassPanelComponent.getCoreFromSpecialization(this.specialization).toLowerCase();
  }

}
