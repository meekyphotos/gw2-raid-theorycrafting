export interface Specialization {
  code: number,
  img: string,
  name: string,
  core: string,
  role: 'damage' | 'support' | 'cc',
  boons: {
    aegis?: BoonQuality
    alacrity?: BoonQuality
    fury?: BoonQuality
    might?: BoonQuality
    protection?: BoonQuality
    quickness?: BoonQuality
    regen?: BoonQuality
    resistance?: BoonQuality
    resolution?: BoonQuality
    stability?: BoonQuality
    swiftness?: BoonQuality
    vigor?: BoonQuality
  },
  misc: {
    daze?: number,
    float?: number,
    knockback?: number,
    knockdown?: number,
    launch?: number,
    pull?: number,
    sink?: number,
    stun?: number,
    barrier?: number,
    breaks_stun?: number,
    healing?: number,
    stealth?: number,
    superspeed?: number,
    cleanse?: number
    blastFinisher?: number,
    strip ?: number
  }
}

export enum BoonQuality {
  SELF_ONLY = -1,
  NONE = 0,
  LOW = 1,
  BELOW_AVERAGE = 2,
  AVERAGE = 3,
  ABOVE_AVERAGE = 4,
  EXCELLENT = 5
}

const guardian: Specialization = {
  code: 1,
  img: 'guardian',
  name: 'Guardian',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: BoonQuality.LOW,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.NONE,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.LOW,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.LOW,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.ABOVE_AVERAGE,
    stability: BoonQuality.LOW,
    swiftness: BoonQuality.AVERAGE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    knockdown: 1,
    blastFinisher: 1
  }
}
const dragonhunter: Specialization = {
  code: 2,
  img: 'dragonhunter',
  name: 'Dragonhunter',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: BoonQuality.LOW,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.SELF_ONLY,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.LOW,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.AVERAGE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    knockdown: 1,
    pull: 1,
  }
}
const firebrand: Specialization = {
  code: 3,
  img: 'firebrand',
  name: 'Firebrand',
  core: 'guardian',
  role: 'support',
  boons: {
    aegis: BoonQuality.ABOVE_AVERAGE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.NONE,
    might: BoonQuality.LOW,
    protection: BoonQuality.ABOVE_AVERAGE,
    quickness: BoonQuality.BELOW_AVERAGE,
    regen: BoonQuality.AVERAGE,
    resistance: BoonQuality.BELOW_AVERAGE,
    resolution: BoonQuality.ABOVE_AVERAGE,
    stability: BoonQuality.EXCELLENT,
    swiftness: BoonQuality.ABOVE_AVERAGE,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {
    healing: 2,
    breaks_stun: 5,
    pull: 2,
    cleanse: 2,
    blastFinisher: 1
  }
}
const willbender: Specialization = {
  code: 4,
  img: 'willbender',
  name: 'Willbender',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: BoonQuality.SELF_ONLY,
    alacrity: BoonQuality.EXCELLENT,
    fury: BoonQuality.NONE,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.NONE,
  },
  misc: {
  }
}
const supportAlacbender: Specialization = {
  code: 30,
  img: 'willbender',
  name: 'Willbender',
  core: 'guardian',
  role: 'support',
  boons: {
    aegis: BoonQuality.ABOVE_AVERAGE,
    alacrity: BoonQuality.EXCELLENT,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.ABOVE_AVERAGE,
    protection: BoonQuality.ABOVE_AVERAGE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.ABOVE_AVERAGE,
    resistance: BoonQuality.SELF_ONLY,
    resolution: BoonQuality.ABOVE_AVERAGE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.AVERAGE,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {
  }
}

const herald: Specialization = {
  code: 5,
  name: 'Herald',
  img: 'herald',
  core: 'revenant',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.AVERAGE,
    might: BoonQuality.ABOVE_AVERAGE,
    protection: BoonQuality.AVERAGE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.LOW,
    swiftness: BoonQuality.EXCELLENT,
    vigor: BoonQuality.NONE,
  },
  misc: {
    superspeed: 2,
    knockdown: 2,
    launch: 2,
    blastFinisher: 1
  }
}
const renegade: Specialization = {
  code: 6,
  img: 'renegade',
  name: 'Renegade',
  core: 'revenant',
  role: 'cc',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.EXCELLENT,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.AVERAGE,
    protection: BoonQuality.LOW,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.LOW,
    resistance: BoonQuality.LOW,
    resolution: BoonQuality.SELF_ONLY,
    stability: BoonQuality.LOW,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {
    pull: 1,
    strip: 1,
    blastFinisher: 1,
  }
}

const powerVindicator: Specialization = {
  code: 8,
  img: 'vindicator',
  name: 'Vindicator',
  core: 'revenant',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.AVERAGE,
    might: BoonQuality.LOW,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.SELF_ONLY,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.SELF_ONLY,
    stability: BoonQuality.LOW,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {
    blastFinisher: 1
  }
}

const berserker: Specialization = {
  code: 9,
  img: 'berserker',
  name: 'Berserker',
  core: 'warrior',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.SELF_ONLY,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.NONE,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {}
}
const spellbreakerSupport: Specialization = {
  code: 26,
  img: 'spellbreaker',
  name: 'Spellbreaker (cele)',
  core: 'warrior',
  role: 'cc',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.NONE,
    might: BoonQuality.AVERAGE,
    protection: BoonQuality.SELF_ONLY,
    quickness: BoonQuality.BELOW_AVERAGE,
    regen: BoonQuality.SELF_ONLY,
    resistance: BoonQuality.LOW,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.LOW,
    swiftness: BoonQuality.LOW,
    vigor: BoonQuality.LOW,
  },
  misc: {
    barrier: 2,
    daze: 3,
    stun: 3,
    knockdown: 3,
    knockback: 3,
    superspeed: 1,
    strip: 1,
  }
}

const spellbreaker: Specialization = {
  code: 10,
  img: 'spellbreaker',
  name: 'Spellbreaker',
  core: 'warrior',
  role: 'cc',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.LOW,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.NONE,
  },
  misc: {
    daze: 3,
    stun: 3,
    knockdown: 3,
    knockback: 3,
    superspeed: 1,
    strip: 1,
  }
}

const scrapper: Specialization = {
  code: 11,
  img: 'scrapper',
  name: 'Scrapper',
  core: 'engineer',
  role: 'support',
  boons: {
    aegis: BoonQuality.LOW,
    alacrity: BoonQuality.LOW,
    fury: BoonQuality.LOW,
    might: BoonQuality.LOW,
    protection: BoonQuality.LOW,
    quickness: BoonQuality.BELOW_AVERAGE,
    regen: BoonQuality.ABOVE_AVERAGE,
    resistance: BoonQuality.LOW,
    resolution: BoonQuality.LOW,
    stability: BoonQuality.BELOW_AVERAGE,
    swiftness: BoonQuality.LOW,
    vigor: BoonQuality.LOW,
  },
  misc: {
    stun: 1,
    superspeed: 5,
    healing: 5,
    stealth: 5,
    cleanse: 5,
    blastFinisher: 1
  }
}

const daredevil: Specialization = {
  code: 13,
  img: 'daredevil',
  name: 'Daredevil',
  core: 'thief',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.AVERAGE,
    might: BoonQuality.LOW,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.NONE,
    swiftness: BoonQuality.LOW,
    vigor: BoonQuality.LOW,
  },
  misc: {
    daze: 1,
    stealth: 1
  }
}

const tempest: Specialization = {
  code: 15,
  img: 'tempest',
  name: 'Tempest',
  core: 'elementalist',
  role: 'support',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.AVERAGE,
    fury: BoonQuality.BELOW_AVERAGE,
    might: BoonQuality.LOW,
    protection: BoonQuality.AVERAGE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.EXCELLENT,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.AVERAGE,
  },
  misc: {
    healing: 5,
    cleanse: 5,
    blastFinisher: 2,
    superspeed: 1,
  }
}
const weaver: Specialization = {
  code: 16,
  img: 'weaver',
  name: 'Weaver',
  core: 'elementalist',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.NONE,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    stun: 3,
    knockback: 2,
    blastFinisher: 2
  }
}
const catalyst: Specialization = {
  code: 17,
  img: 'catalyst',
  name: 'Catalyst',
  core: 'elementalist',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.NONE,
    protection: BoonQuality.SELF_ONLY,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.SELF_ONLY,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.NONE,
  },
  misc: {
    stun: 3,
    knockback: 2,
    blastFinisher: 2,
  }
}

const chronomancer: Specialization = {
  code: 18,
  img: 'chronomancer',
  name: 'Chronomancer',
  core: 'mesmer',
  role: 'cc',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.ABOVE_AVERAGE,
    fury: BoonQuality.NONE,
    might: BoonQuality.LOW,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.NONE,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    daze: 5,
    float: 5,
    knockdown: 5,
    pull: 5,
    stealth: 1,
    strip: 1,
  }
}

const virtuoso: Specialization = {
  code: 19,
  img: 'virtuoso',
  name: 'Virtuoso',
  core: 'mesmer',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.NONE,
    might: BoonQuality.NONE,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.NONE,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    daze: 1,
    knockback: 2,
    pull: 5,
    strip: 1,
  }
}

const reaper: Specialization = {
  code: 20,
  img: 'reaper',
  name: 'Reaper',
  core: 'necromancer',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.NONE,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.SELF_ONLY,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.SELF_ONLY,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    stun: 2,
    strip: 1,
  }
}
const scourge: Specialization = {
  code: 21,
  img: 'scourge',
  name: 'Scourge',
  core: 'necromancer',
  role: 'damage',
  boons: {
    aegis: BoonQuality.SELF_ONLY,
    alacrity: BoonQuality.BELOW_AVERAGE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.SELF_ONLY,
    protection: BoonQuality.SELF_ONLY,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.SELF_ONLY,
    resistance: BoonQuality.SELF_ONLY,
    resolution: BoonQuality.SELF_ONLY,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {
    barrier: 3,
    strip: 1,
  }
}
const supportScourge: Specialization = {
  code: 31,
  img: 'scourge',
  name: 'Scourge',
  core: 'necromancer',
  role: 'support',
  boons: {
    aegis: BoonQuality.LOW,
    alacrity: BoonQuality.AVERAGE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.AVERAGE,
    protection: BoonQuality.SELF_ONLY,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.ABOVE_AVERAGE,
    resistance: BoonQuality.SELF_ONLY,
    resolution: BoonQuality.SELF_ONLY,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.SELF_ONLY,
  },
  misc: {
    barrier: 3,
    strip: 1,
  }
}

const soulbeast: Specialization = {
  code: 23,
  img: 'soulbeast',
  name: 'Soulbeast',
  core: 'ranger',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.AVERAGE,
    might: BoonQuality.NONE,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.SELF_ONLY,
    vigor: BoonQuality.NONE,
  },
  misc: {}
}
const holo: Specialization = {
  code: 33,
  img: 'holosmith',
  name: 'Holosmith',
  core: 'engineer',
  role: 'damage',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.NONE,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.NONE,
    resistance: BoonQuality.NONE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    superspeed: 1,
    blastFinisher: 1,
  }
}
const druid: Specialization = {
  code: 24,
  img: 'druid',
  name: 'Druid',
  core: 'ranger',
  role: 'support',
  boons: {
    aegis: BoonQuality.LOW,
    alacrity: BoonQuality.ABOVE_AVERAGE,
    fury: BoonQuality.BELOW_AVERAGE,
    might: BoonQuality.LOW,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.SELF_ONLY,
    regen: BoonQuality.ABOVE_AVERAGE,
    resistance: BoonQuality.LOW,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.LOW,
    swiftness: BoonQuality.BELOW_AVERAGE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    stealth: 1,
    blastFinisher: 2,
  }
}
const supportVindicator: Specialization = {
  code: 25,
  img: 'vindicator',
  name: 'Vindicator',
  core: 'revenant',
  role: 'support',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.SELF_ONLY,
    might: BoonQuality.LOW,
    protection: BoonQuality.NONE,
    quickness: BoonQuality.NONE,
    regen: BoonQuality.EXCELLENT,
    resistance: BoonQuality.ABOVE_AVERAGE,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.SELF_ONLY,
    swiftness: BoonQuality.NONE,
    vigor: BoonQuality.LOW,
  },
  misc: {
    blastFinisher: 2,
    pull: 5,
    barrier: 5,
    breaks_stun: 2,
  }
}
const supportSpecter: Specialization = {
  code: 27,
  img: 'specter',
  name: 'Specter',
  core: 'thief',
  role: 'support',
  boons: {
    aegis: BoonQuality.NONE,
    alacrity: BoonQuality.NONE,
    fury: BoonQuality.LOW,
    might: BoonQuality.NONE,
    protection: BoonQuality.BELOW_AVERAGE,
    quickness: BoonQuality.ABOVE_AVERAGE,
    regen: BoonQuality.AVERAGE,
    resistance: BoonQuality.EXCELLENT,
    resolution: BoonQuality.NONE,
    stability: BoonQuality.BELOW_AVERAGE,
    swiftness: BoonQuality.AVERAGE,
    vigor: BoonQuality.NONE,
  },
  misc: {
    barrier: 5,
    stealth: 1,
  }
}
export const supportGroup: { [k: string]: Specialization } = {
  firebrand, scrapper, tempest, spellbreakerSupport, druid,
  supportVindicator, supportAlacbender, supportSpecter, supportScourge
}
export const meleeGroup: { [k: string]: Specialization } = {
  reaper,
  berserker,
  scourge,
  spellbreaker,
  holo,
  daredevil,
  willbender,
}
export const rangeGroup: { [k: string]: Specialization } = {
  dragonhunter,
  guardian,
  powerVindicator,
  weaver,
  herald,
  catalyst,

  virtuoso,
}
export const utilityGroup: { [k: string]: Specialization } = {
  chronomancer,
  soulbeast,
  renegade,

}


export const defs: { [k: string]: Specialization } = {
  ...supportGroup,
  ...meleeGroup,
  ...rangeGroup,
  ...utilityGroup,
}
