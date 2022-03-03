import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DragData} from "../class.service";
import {defs} from "../class.definitions";

@Component({
  selector: 'app-class-panel',
  templateUrl: './class-panel.component.html',
  styleUrls: ['./class-panel.component.css']
})
export class ClassPanelComponent implements OnInit {
  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();

  _allSpecializations = Object.values(defs).map(it => it.name)
  static getCoreFromSpecialization(spec: string): string {
    // @ts-ignore
    return defs[spec].core
  }

  constructor() { }

  ngOnInit(): void {
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
