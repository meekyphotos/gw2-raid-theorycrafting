import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DragData} from "../class.service";
import {defs, meleeGroup, rangeGroup, supportGroup, utilityGroup} from "../class.definitions";

@Component({
             selector: 'app-class-panel',
             templateUrl: './class-panel.component.html',
             styleUrls: ['./class-panel.component.css']
           })
export class ClassPanelComponent implements OnInit {
  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  _allSpecializations = Object.values(defs)
  _sTier = Object.values(supportGroup)
  _aTier = Object.values(meleeGroup)
  _bTier = Object.values(rangeGroup)
  _cTier = Object.values(utilityGroup)

  static getCoreFromSpecialization(spec: string): string {
    // @ts-ignore
    return defs[spec].core
  }

  constructor() {
  }

  ngOnInit(): void {
    this.ready.emit(true)
  }

  drag(specialization: any, number: number, $event: DragEvent) {
    const dragData: DragData = {
      hasSource: false,
      groupId: undefined,
      positionId: undefined,
      what: specialization
    };
    if ($event.dataTransfer != null) {
      $event.dataTransfer.setData('text', JSON.stringify(dragData));
    }
  }
}
