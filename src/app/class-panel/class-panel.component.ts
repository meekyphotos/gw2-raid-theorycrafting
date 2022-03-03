import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DragData} from "../class.service";

@Component({
  selector: 'app-class-panel',
  templateUrl: './class-panel.component.html',
  styleUrls: ['./class-panel.component.css']
})
export class ClassPanelComponent implements OnInit {
  @Output() ready: EventEmitter<boolean> = new EventEmitter<boolean>();
  static allSpecializations = [
    ['Guardian', 'Dragonhunter', 'Firebrand', 'Willbender'],
    ['Revenant', 'Herald', 'Renegade', 'Vindicator'],
    ['Warrior', 'Berserker', 'Spellbreaker', 'Bladesworn'],
    ['Engineer', 'Scrapper', 'Holosmith', 'Mechanist'],
    ['Ranger', 'Druid', 'Soulbeast', 'Untamed'],
    ['Thief', 'Daredevil', 'Deadeye', 'Specter'],
    ['Elementalist', 'Tempest', 'Weaver', 'Catalyst'],
    ['Mesmer', 'Chronomancer', 'Mirage', 'Virtuoso'],
    ['Necromancer', 'Reaper', 'Scourge', 'Harbinger'],
  ];
  _allSpecializations = ClassPanelComponent.allSpecializations.flatMap(it => it)
  static getCoreFromSpecialization(spec: string): string {
    return this.allSpecializations.filter(
      it => it.indexOf(spec) >= 0
    )[0][0]
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
