import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DragData, ReceivedItemEvent} from "../class.service";

@Component({
             selector: 'app-raid-comp',
             templateUrl: './raid-comp.component.html',
             styleUrls: ['./raid-comp.component.css']
           })
export class RaidCompComponent implements OnInit {
  @Input() group: Array<Array<string | null>> = [];
  @Output() groupChange: EventEmitter<Array<Array<string | null>>> = new EventEmitter<Array<Array<string | null>>>();
  @Output() changesToSquad: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleReceived($event: ReceivedItemEvent) {

  }

  allowDrop(ev: DragEvent) {
    ev.preventDefault();
  }

  drop(ev: DragEvent) {
    ev.preventDefault();
    if (ev.dataTransfer != null) {
      const data = ev.dataTransfer.getData('text');
      const spotAssignment: DragData = JSON.parse(data);
      console.log('handling drop')
      if (spotAssignment.hasSource && spotAssignment.groupId != undefined && spotAssignment.positionId != undefined) {
        this.groupChange.emit(
          this.group.map((it, index) => {
            if ( index == spotAssignment.groupId ) {
              return it.map((cell, cellIndex) => {
                if ( cellIndex == spotAssignment.positionId ) {
                  return null;
                } else {
                  return cell;
                }
              })
            } else {
              return it
            }
          })
        )
      }
    }
  }

}
