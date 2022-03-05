import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {defs} from "../../class.definitions";

@Component({
             selector: 'app-control-misc-table',
             templateUrl: './control-misc-table.component.html',
             styleUrls: ['./control-misc-table.component.css']
           })
export class ControlMiscTableComponent implements OnInit, OnChanges {
  @Input() party: Array<string | null> = [];

  constructor() {
  }

  daze = 'no'
  float = 'no'
  knockback = 'no'
  knockdown = 'no'
  stun = 'no'
  launch = 'no'
  pull = 'no'
  sink = 'no'
  barrier = 'no'
  breaksStun = 'no'
  healing = 'no'
  cleanse = 'no'
  stealth = 'no'
  superspeed = 'no'

  ngOnInit(): void {
    this.updateStats()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateStats();
  }

  private updateStats() {
    let dazeValue = 0
    let floatValue = 0
    let knockbackValue = 0
    let knockdownValue = 0
    let stunValue = 0
    let launchValue = 0
    let pullValue = 0
    let sinkValue = 0
    let barrierValue = 0
    let breaksStunValue = 0
    let healingValue = 0
    let cleanseValue = 0
    let stealthValue = 0
    let superspeedValue = 0
    for (const partyElement of this.party) {
      if (partyElement != null) {
        // @ts-ignore
        const classDef = defs[partyElement.toLowerCase()]
        dazeValue += classDef.misc.daze || 0
        floatValue += classDef.misc.float || 0
        knockbackValue += classDef.misc.knockback || 0
        knockdownValue += classDef.misc.knockdown || 0
        stunValue += classDef.misc.stun || 0
        launchValue += classDef.misc.launch || 0
        pullValue += classDef.misc.pull || 0
        sinkValue += classDef.misc.sink || 0
        barrierValue += classDef.misc.barrier || 0
        breaksStunValue += classDef.misc.breaks_stun || 0
        healingValue += classDef.misc.healing || 0
        cleanseValue += classDef.misc.cleanse || 0
        stealthValue += classDef.misc.stealth || 0
        superspeedValue += classDef.misc.superspeed || 0
      }
    }
    this.daze = this.toStringValue(dazeValue)
    this.float = this.toStringValue(floatValue)
    this.knockback = this.toStringValue(knockbackValue)
    this.knockdown = this.toStringValue(knockdownValue)
    this.stun = this.toStringValue(stunValue)
    this.launch = this.toStringValue(launchValue)
    this.pull = this.toStringValue(pullValue)
    this.sink = this.toStringValue(sinkValue)
    this.barrier = this.toStringValue(barrierValue)
    this.breaksStun = this.toStringValue(breaksStunValue)
    this.healing = this.toStringValue(healingValue)
    this.cleanse = this.toStringValue(cleanseValue)
    this.stealth = this.toStringValue(stealthValue)
    this.superspeed = this.toStringValue(superspeedValue)
  }

  toStringValue(name: number): string {
    if (name == 0) {
      return 'no'
    } else {
      if (name > 3) {
        return 'ok'
      } else {
        return 'weak'
      }
    }
  }
}
