import {Component, Input, OnInit} from '@angular/core';

const skillFacts = {
  aegis: {
    name: 'Aegis',
    description: 'Block the next incoming attack; stacks duration.'
  },
  alacrity: {
    name: 'Alacrity',
    description: 'Skills recharge faster.'
  },
  fury: {
    name: 'Fury',
    description: 'Critical Chance increased by 20%; stacks duration.'
  },
  might: {
    name: 'Might',
    description: 'Increased outgoing damage; stacks intensity.'
  },
  protection: {
    name: 'Protection',
    description: 'Incoming damage decreased by 33%; stacks duration.'
  },
  quickness: {
    name: 'Quickness',
    description: 'Skills and actions are faster.'
  },
  regeneration: {
    name: 'Regeneration',
    description: 'Gain health every second; stacks duration.'
  },
  resistance: {
    name: 'Resistance',
    description: 'Nondamaging conditions currently on you are ineffective; stacks duration.'
  },
  resolution: {
    name: 'Resolution',
    description: 'Incoming condition damage decreased by 33%; stacks duration.'
  },
  stability: {
    name: 'Stability',
    description: 'Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared, or taunted.'
  },
  swiftness: {
    name: 'Swiftness',
    description: 'Movement speed increased by 33%; stacks duration.'
  },
  vigor: {
    name: 'Vigor',
    description: 'Endurance regeneration increased by 50%; stacks duration.'
  },

  daze: {
    name: 'Daze',
    description: 'Unable to activate skills.'
  },
  float: {
    name: 'Float',
    description: 'Float is an effect caused by some skills which forces the affected targets to move towards the center of the effect or the surface of the water.'
  },
  knockback: {
    name: 'Knockback',
    description: 'Knockback, also known as Push, is a control effect that interrupts affected targets, briefly disables them, and moves them away from the effect\'s source. Unlike launch, knockback will not move downed players, and will not throw enemies over low obstacles.'
  },
  knockdown: {
    name: 'Knockdown',
    description: 'Knockdown is a control effect which interrupts and causes the foe to be unable to move or use skills for a short duration. Knocked down foes fall to the ground.'
  },
  stun: {
    name: 'Stun',
    description: 'Stun is a control effect that disables all skills and interrupts any current action. Stunned characters cannot move or activate skills, except those without an activation time, e.g. shouts and some signets. Stun breakers will restore one\'s freedom to act. The duration of stun does not stack.'
  },
  launch: {
    name: 'Launch',
    description: 'Launch is a control effect that causes the affected target to be thrown backwards into air and remain stuck on the ground. It is mechanically similar to a combination of knockback and knockdown with these differences: affected targets are moved farther away from their original position and disabled for a longer period, it can affect downed players, and it can affect foes with resistance to knockback, such as Risen Abominations. Like any control effect, it can be countered by stability.'
  },
  pull: {
    name: 'Pull',
    description: 'Pull is an effect caused by some skills which shortens the distance between the user and the foe by drawing one of them to another. If a foe is pulled, this can result in an interrupt.'
  },
  sink: {
    name: 'Sink',
    description: 'Sink is an underwater effect caused by some skills which forces the affected target(s) to move away from the surface.'
  },
  barrier: {
    name: 'Barrier',
    description: 'Barrier is a combat mechanic introduced in the Guild Wars 2: Path of Fire expansion. It creates a health barrier that takes damage prior to the health bar. Barrier disappears 5 seconds after being applied. Applying a barrier while one is already active will add to it, but the previously-existing barrier will still disappear 5 seconds after it was originally applied. The amount of barrier generated is based on the source\'s healing power, and is capped at 50% of the recipient\'s maximum health.'
  },
  breaks_stun: {
    name: 'Stun Break',
    description: 'Skills that stun break will cancel control effects such as stun. These are often indicated by a "Breaks stun" skill fact on the tooltip. Certain traits will also break stun by granting stability upon being hit by a control effect. Stun breaks work on control effects which last for a duration. Fear and Taunt are considered control effects as well as conditions and can be broken.'
  },
  healing: {
    name: 'Healing',
    description: 'Healing is a gameplay mechanic for replenishing the health of a character or NPC.'
  },
  cleanse: {
    name: 'Cleanse',
    description: 'Cleanse is a gameplay mechanic for removing conditions of a friendly character or NPC.'
  },
  stealth: {
    name: 'Stealth',
    description: 'Stealth, also known as invisibility, is an effect which allows the stealthed character to be invisible to enemy players and avoid being detected by hostile NPCs.'
  },
  superspeed: {
    name: 'Superspeed',
    description: 'Superspeed is an effect that provides a 100% increase to movement speed. Other effects that provide a bonus to movement speed (e.g. Swiftness, certain traits and signets) do not stack with superspeed; only the highest increase in movement speed will be applied. Superspeed stacks in duration, up to 10 seconds.'
  },

}

@Component({
             selector: 'app-skill-fact',
             templateUrl: './skill-fact.component.html',
             styleUrls: ['./skill-fact.component.css']
           })
export class SkillFactComponent implements OnInit {
  @Input()
  skill: string = ''

  @Input()
  modifier: string = ''

  titleOf() {
    // @ts-ignore
    return skillFacts[this.skill].name;
  }

  descriptionOf() {
    // @ts-ignore
    return skillFacts[this.skill].description;
  }

  ngOnInit(): void {
  }

}
