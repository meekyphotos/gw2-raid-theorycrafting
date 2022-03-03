import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DragData, ReceivedItemEvent} from "../../class.service";
import {defs} from "../../class.definitions";

@Component({
             selector: 'app-group',
             templateUrl: './group.component.html',
             styleUrls: ['./group.component.css']
           })
export class GroupComponent implements OnInit {
  @Input() title: string = '';
  @Input() groupId: number = 0;
  @Input() party: Array<string | null> = [];
  @Output() receivedItem: EventEmitter<ReceivedItemEvent> = new EventEmitter<ReceivedItemEvent>();
  @Output() updated: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isFull() {
    for (const partyElement of this.party) {
      if (partyElement == null) {
        return false;
      }
    }
    return true;
  }

  countParty() {
    let count = 0;
    for (const partyElement of this.party) {
      if (partyElement != null) {
        count++;
      }
    }
    return count;
  }

  drop(slotIndex: number, ev: DragEvent) {
    ev.preventDefault();
    if (ev.dataTransfer != null) {
      const data = ev.dataTransfer.getData('text');
      const spotAssignment: DragData = JSON.parse(data);
      this.party[slotIndex] = spotAssignment.what;
      this.updated.emit(true);
      if (spotAssignment.hasSource) {
        if (spotAssignment.groupId === this.groupId) {
          if (spotAssignment.positionId !== slotIndex && spotAssignment.positionId != undefined) {
            this.party[spotAssignment.positionId] = null;
          }
        } else {
          this.receivedItem.emit({
                                   source: spotAssignment.groupId,
                                   position: spotAssignment.positionId
                                 });
        }
      }
    }
  }

  allowDrop(ev: DragEvent) {
    ev.preventDefault();
  }

  drag(slotIndex: number, ev: DragEvent) {
    if (this.party[slotIndex]) {
      const dragData: DragData = {
        hasSource: true,
        groupId: this.groupId,
        positionId: slotIndex,
        what: this.party[slotIndex]
      };
      if (ev.dataTransfer != null) {
        ev.dataTransfer.setData('text', JSON.stringify(dragData));
      }
    } else {
      ev.preventDefault();
    }

  }

  computeBoons() {
    return [...new Set(this.party.filter(it => it != null).flatMap(it => {
      // @ts-ignore
      return Object.keys(defs[it.toLowerCase()].boons);
    }))].join(' ')
  }

  computeMisc() {
    return [...new Set(this.party.filter(it => it != null).flatMap(it => {
      // @ts-ignore
      return Object.keys(defs[it.toLowerCase()].misc);
    }))].join(' ')
  }
}
