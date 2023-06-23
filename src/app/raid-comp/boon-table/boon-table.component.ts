import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BoonQuality, Specialization} from "../../class.definitions";

function getValue(quality ?: BoonQuality): number {
  if (quality) {
    if(quality > 0){
      return quality
    }
  }
  return 0
}

@Component({
             selector: 'app-boon-table',
             templateUrl: './boon-table.component.html',
             styleUrls: ['./boon-table.component.css']
           })
export class BoonTableComponent implements OnInit, OnChanges {
  @Input() party: Array<Specialization | null> = [];
  @Input() index = 0;
  aegis: string = 'q0';
  alacrity: string = 'q0';
  fury: string = 'q0';
  might: string = 'q0';
  protection: string = 'q0';
  quickness: string = 'q0';
  regen: string = 'q0';
  resistance: string = 'q0';
  resolution: string = 'q0';
  stability: string = 'q0';
  swiftness: string = 'q0';
  vigor: string = 'q0';

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
      if (partyElement) {
        const classDef = partyElement.boons
        aegisValue += getValue(classDef.aegis)
        alacrityValue += getValue(classDef.alacrity)
        furyValue += getValue(classDef.fury)
        mightValue += getValue(classDef.might)
        protectionValue += getValue(classDef.protection)
        quicknessValue += getValue(classDef.quickness)
        regenValue += getValue(classDef.regen)
        resistanceValue += getValue(classDef.resistance)
        resolutionValue += getValue(classDef.resolution)
        stabilityValue += getValue(classDef.stability)
        swiftnessValue += getValue(classDef.swiftness)
        vigorValue += getValue(classDef.vigor)
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
    if(name < 5) {
      return `q${name}`
    }
    return "q5"
  }

}
