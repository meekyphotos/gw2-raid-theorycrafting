import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {defs} from "../../class.definitions";

@Component({
             selector: 'app-boon-table',
             templateUrl: './boon-table.component.html',
             styleUrls: ['./boon-table.component.css']
           })
export class BoonTableComponent implements OnInit, OnChanges {
  @Input() party: Array<string | null> = [];
  aegis: string = 'no';
  alacrity: string = 'no';
  fury: string = 'no';
  might: string = 'no';
  protection: string = 'no';
  quickness: string = 'no';
  regen: string = 'no';
  resistance: string = 'no';
  resolution: string = 'no';
  stability: string = 'no';
  swiftness: string = 'no';
  vigor: string = 'no';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.computeFlags();
  }

  private computeFlags() {
    let aegisValue = 0
    let alacrityValue = 0
    let furyValue = 0
    let mightValue = 0
    let protectionValue = 0
    let quicknessValue = 0
    let regenValue = 0
    let resistanceValue = 0
    let resolutionValue = 0
    let stabilityValue = 0
    let swiftnessValue = 0
    let vigorValue = 0
    for (const partyElement of this.party) {
      if ( partyElement ) {
        const classDef = defs[partyElement.toLowerCase()].boons
        aegisValue += classDef.aegis || 0
        alacrityValue += classDef.alacrity || 0
        furyValue += classDef.fury || 0
        mightValue += classDef.might || 0
        protectionValue += classDef.protection || 0
        quicknessValue += classDef.quickness || 0
        regenValue += classDef.regen || 0
        resistanceValue += classDef.resistance || 0
        resolutionValue += classDef.resolution || 0
        stabilityValue += classDef.stability || 0
        swiftnessValue += classDef.swiftness || 0
        vigorValue += classDef.vigor || 0
      }
    }

    this.aegis = this.toStringValue(aegisValue)
    this.alacrity = this.toStringValue(alacrityValue)
    this.fury = this.toStringValue(furyValue)
    this.might = this.toStringValue(mightValue)
    this.protection = this.toStringValue(protectionValue)
    this.quickness = this.toStringValue(quicknessValue)
    this.regen = this.toStringValue(regenValue)
    this.resistance = this.toStringValue(resistanceValue)
    this.resolution = this.toStringValue(resolutionValue)
    this.stability = this.toStringValue(stabilityValue)
    this.swiftness = this.toStringValue(swiftnessValue)
    this.vigor = this.toStringValue(vigorValue)
  }

  ngOnInit(): void {
    this.computeFlags()
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
