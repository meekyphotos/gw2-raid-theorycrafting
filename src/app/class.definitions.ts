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
    blastFinisher?: number
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
    blastFinisher: 5
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
    resolution: 5
  },
  misc: {
    knockdown: 1,
    pull: 1,
    blastFinisher: 5
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
    blastFinisher: 5
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
    blastFinisher: 5
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
    blastFinisher: 2
  }
}
const renegade: Specialization = {
  code: 6,
  img: 'renegade',
  name: 'Renegade',
  core: 'revenant',
  role: 'damage',
  boons: {
    stability: 1,
    alacrity: 3,
    resistance: 1,
    resolution: 3
  },
  misc: {
    pull: 1
  }
}
const vindicator: Specialization = {
  code: 7,
  img: 'vindicator',
  name: 'Vindicator (Support)',
  core: 'revenant',
  role: 'support',
  boons: {
    regen: 5,
    stability: 2,
    vigor: 5,
    resolution: 5
  },
  misc: {
    healing: 5,
    barrier: 5,
    cleanse: 3,
    launch: 1,
    blastFinisher: 2
  }
}
const powerVindicator: Specialization = {
  code: 8,
  img: 'vindicator',
  name: 'Vindicator (Power)',
  core: 'revenant',
  role: 'damage',
  boons: {
    stability: 2,
  },
  misc: {
    blastFinisher: 2
  }
}

const berserker: Specialization = {
  code: 9,
  img: 'berserker',
  name: 'Berserker',
  core: 'warrior',
  role: 'damage',
  boons: {
  },
  misc: {
  }
}
const spellbreakerSupport: Specialization = {
  code: 10,
  img: 'spellbreaker',
  name: 'Spellbreaker (support)',
  core: 'warrior',
  role: 'cc',
  boons: {
    fury: 3,
    swiftness: 3
  },
  misc: {
    barrier: 2,
    daze: 3,
    stun: 3,
    knockdown: 3,
    knockback: 3
  }
}

const spellbreaker: Specialization = {
  code: 10,
  img: 'spellbreaker',
  name: 'Spellbreaker (Power)',
  core: 'warrior',
  role: 'cc',
  boons: {
    fury: 0,
    swiftness: 0
  },
  misc: {
    barrier: 0,
    daze: 3,
    stun: 3,
    knockdown: 3,
    knockback: 3
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
    alacrity: 3,
    fury: 3,
    might: 3,
    protection: 3,
    quickness: 3,
    regen: 3,
    resistance: 3,
    resolution: 3,
    stability: 3,
    swiftness: 3,
    vigor: 3,
  },
  misc: {
    stun: 1,
    superspeed: 5,
    healing: 5,
    stealth: 5,
    cleanse: 5,
    blastFinisher: 5
  }
}

const mechanist: Specialization = {
  code: 12,
  img: 'mechanist',
  name: 'Mechanist',
  core: 'engineer',
  role: 'support',
  boons: {
    aegis: 3,
    alacrity: 3,
    fury: 3,
    might: 3,
    protection: 3,
    quickness: 3,
    regen: 3,
    resistance: 3,
    resolution: 3,
    stability: 3,
    swiftness: 3,
    vigor: 3,
  },
  misc: {
    stun: 1,
    daze: 1,
    knockback: 1,
    barrier: 5,
    healing: 5,
    cleanse: 5,
    blastFinisher: 5
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
    daze: 1
  }
}
const specter: Specialization = {
  code: 14,
  img: 'specter',
  name: 'Specter',
  core: 'thief',
  role: 'support',
  boons: {
    fury: 1,
    vigor: 1,
    swiftness: 1
  },
  misc: {
    daze: 1,
    healing: 3,
    barrier: 3,
    stealth: 5,
    pull: 3
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
    might: 3,
    regen: 5,
    vigor: 5
  },
  misc: {
    healing: 5,
    cleanse: 5,
    blastFinisher: 5
  }
}
const weaver: Specialization = {
  code: 16,
  img: 'weaver',
  name: 'Weaver',
  core: 'elementalist',
  role: 'damage',
  boons: {},
  misc: {
    stun: 3,
    knockback: 2
  }
}
const catalyst: Specialization = {
  code: 17,
  img: 'catalyst',
  name: 'Catalyst',
  core: 'elementalist',
  role: 'damage',
  boons: {},
  misc: {
    stun: 3,
    knockback: 2
  }
}

const chronomancer: Specialization = {
  code: 18,
  img: 'chronomancer',
  name: 'Chronomancer',
  core: 'mesmer',
  role: 'cc',
  boons: {
    stability: 2
  },
  misc: {
    daze: 5,
    float: 5,
    knockdown: 5,
    pull: 5
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
    stun: 2
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
    barrier: 3
  }
}
const harbinger: Specialization = {
  code: 22,
  img: 'harbinger',
  name: 'Harbinger',
  core: 'necromancer',
  role: 'damage',
  boons: {},
  misc: {}
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
  code: 23,
  img: 'druid',
  name: 'Druid',
  core: 'ranger',
  role: 'support',
  boons: {},
  misc: {}
}

export const defs: {[k: string]: Specialization} = {
  guardian,
  dragonhunter,
  firebrand,
  willbender,
  herald,
  renegade,
  powerVindicator,
  berserker,
  spellbreaker,
  spellbreakerSupport,
  scrapper,
  mechanist,
  daredevil,
  specter,
  tempest,
  weaver,
  catalyst,
  chronomancer,
  virtuoso,
  reaper,
  scourge,
  harbinger,
  soulbeast,
  druid
}
