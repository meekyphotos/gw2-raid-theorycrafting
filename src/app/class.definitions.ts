export interface Specialization {
  code: number,
  img: string,
  name: string,
  core: string,
  role: 'damage' | 'support' | 'cc',
  boons: {
    aegis?: number
    alacrity?: number
    fury?: number
    might?: number
    protection?: number
    quickness?: number
    regen?: number
    resistance?: number
    resolution?: number
    stability?: number
    swiftness?: number
    vigor?: number
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

const guardian: Specialization = {
  code: 1,
  img: 'guardian',
  name: 'Guardian',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: 1,
    resolution: 5
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
    aegis: 1,
    resolution: 5,
    fury: -1,
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
    aegis: 3,
    might: 3,
    protection: 5,
    quickness: 5,
    regen: 5,
    resistance: 5,
    resolution: 5,
    stability: 5,
    swiftness: 5,
    vigor: 3
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
    aegis: 1,
    stability: 2,
    resolution: 2
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
    fury: 5,
    might: 3,
    protection: 3,
    regen: 3,
    swiftness: 5,
    stability: 2
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
    resistance: 1,
    alacrity: 3,
    stability: 1,
    resolution: 3,
    fury: 1,
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
    stability: 1,
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
    fury: -1
  },
  misc: {}
}
const spellbreakerSupport: Specialization = {
  code: 26,
  img: 'spellbreaker',
  name: 'Spellbreaker',
  core: 'warrior',
  role: 'cc',
  boons: {
    fury: 1,
    swiftness: 3
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
  boons: {},
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
    aegis: 3,
    might: 3,
    protection: 3,
    regen: 3,
    resolution: 3,
    swiftness: 3,
    vigor: 3,
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

const mechanist: Specialization = {
  code: 12,
  img: 'mechanist',
  name: 'Mechanist',
  core: 'engineer',
  role: 'support',
  boons: {},
  misc: {
    stun: 1,
    daze: 1,
    knockback: 1,
    barrier: 5,
    healing: 5,
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
    fury: 2,
    swiftness: 2,
    vigor: 2
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
    protection: 4,
    alacrity: 1,
    might: 3,
    regen: 5,
    vigor: 5
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
    fury: -1,
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
    fury: -1,
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
    stability: 2,
    alacrity: 1,
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
  boons: {},
  misc: {
    daze: 1,
    knockback: 2,
    pull: 5
  }
}

const reaper: Specialization = {
  code: 20,
  img: 'reaper',
  name: 'Reaper',
  core: 'necromancer',
  role: 'damage',
  boons: {},
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
    stability: 1
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
  boons: {},
  misc: {}
}
const druid: Specialization = {
  code: 24,
  img: 'druid',
  name: 'Druid',
  core: 'ranger',
  role: 'support',
  boons: {
    stability: 1,
    fury: 1
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
    resistance: 5,
    stability: 2,
    protection: 5,
    fury: 1,
    regen: 5,
    might: 2,
    vigor: 5,
  },
  misc: {
    blastFinisher: 2,
    pull: 5,
    barrier: 5,
    breaks_stun: 2,
  }
}
export const supportGroup: { [k: string]: Specialization } = {
  firebrand, scrapper, tempest, spellbreakerSupport, druid, mechanist,
  supportVindicator
}
export const meleeGroup: { [k: string]: Specialization } = {
  reaper,
  berserker,
  scourge,
  spellbreaker,

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
