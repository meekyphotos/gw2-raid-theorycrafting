import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DragData, ReceivedItemEvent} from "../class.service";
import {Specialization} from "../class.definitions";

@Component({
             selector: 'app-raid-comp',
             templateUrl: './raid-comp.component.html',
             styleUrls: ['./raid-comp.component.css']
           })
export class RaidCompComponent implements OnInit {
  @Input() group: Array<Array<Specialization | null>> = [];
  @Input() advanced = false;
  @Output() groupChange: EventEmitter<Array<Array<Specialization | null>>> = new EventEmitter<Array<Array<Specialization | null>>>();
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
