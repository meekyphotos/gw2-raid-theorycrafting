interface Specialization {
  name: string,
  core: string,
  role: 'damage' | 'support' | 'cc',
  boons: {
    aegis?: boolean
    alacrity?: boolean
    fury?: boolean
    might?: boolean
    protection?: boolean
    quickness?: boolean
    regen?: boolean
    resistance?: boolean
    resolution?: boolean
    stability?: boolean
    swiftness?: boolean
    vigor?: boolean
  },
  misc: {
    daze?: boolean,
    float?: boolean,
    knockback?: boolean,
    knockdown?: boolean,
    launch?: boolean,
    pull?: boolean,
    sink?: boolean,
    stun?: boolean,
    barrier?: boolean,
    breaks_stun?: boolean,
    healing?: boolean,
    stealth?: boolean,
    superspeed?: boolean
  }
}

const guardian: Specialization = {
  name: 'Guardian',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: true,
    resolution: true
  },
  misc: {
    knockdown: true
  }
}
const dragonhunter: Specialization = {
  name: 'Dragonhunter',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: true,
    resolution: true
  },
  misc: {
    knockdown: true
  }
}
const firebrand: Specialization = {
  name: 'Firebrand',
  core: 'guardian',
  role: 'support',
  boons: {
    aegis: true,
    might: true,
    protection: true,
    quickness: true,
    regen: true,
    resistance: true,
    resolution: true,
    stability: true,
    swiftness: true,
    vigor: true
  },
  misc: {
    healing: true,
    breaks_stun: true
  }
}
const willbender: Specialization = {
  name: 'Willbender',
  core: 'guardian',
  role: 'damage',
  boons: {
    aegis: true,
    stability: true,
    resolution: true
  },
  misc: {}
}

const herald: Specialization = {
  name: 'Herald',
  core: 'revenant',
  role: 'damage',
  boons: {
    fury: true,
    might: true,
    protection: true,
    regen: true,
    swiftness: true,
    stability: true
  },
  misc: {
    superspeed: true,
    knockdown: true,
    launch: true
  }
}
const renegade: Specialization = {
  name: 'Renegade',
  core: 'revenant',
  role: 'damage',
  boons: {
    stability: true,
    alacrity: true,
    resistance: true,
    resolution: true
  },
  misc: {
    pull: true
  }
}
const vindicator: Specialization = {
  name: 'Vindicator',
  core: 'revenant',
  role: 'support',
  boons: {
    regen: true,
    stability: true,
    vigor: true,
    resolution: true
  },
  misc: {
    healing: true,
    barrier: true,
    launch: true
  }
}
const berserker: Specialization = {
  name: 'Berserker',
  core: 'warrior',
  role: 'damage',
  boons: {
  },
  misc: {
  }
}
const spellbreaker: Specialization = {
  name: 'Spellbreaker',
  core: 'warrior',
  role: 'cc',
  boons: {
    fury: true,
    swiftness: true
  },
  misc: {
    barrier: true,
    daze: true,
    stun: true,
    knockdown: true,
    knockback: true
  }
}

const scrapper: Specialization = {
  name: 'Scrapper',
  core: 'engineer',
  role: 'support',
  boons: {
    aegis: true,
    alacrity: true,
    fury: true,
    might: true,
    protection: true,
    quickness: true,
    regen: true,
    resistance: true,
    resolution: true,
    stability: true,
    swiftness: true,
    vigor: true,
  },
  misc: {
    stun: true,
    superspeed: true,
    healing: true,
    stealth: true
  }
}

const mechanist: Specialization = {
  name: 'Mechanist',
  core: 'engineer',
  role: 'support',
  boons: {
    aegis: true,
    alacrity: true,
    fury: true,
    might: true,
    protection: true,
    quickness: true,
    regen: true,
    resistance: true,
    resolution: true,
    stability: true,
    swiftness: true,
    vigor: true,
  },
  misc: {
    stun: true,
    daze: true,
    knockback: true,
    barrier: true,
    healing: true
  }
}

const daredevil: Specialization = {
  name: 'Daredevil',
  core: 'thief',
  role: 'damage',
  boons: {
    fury: true,
    swiftness: true,
    vigor: true
  },
  misc: {
    daze: true
  }
}
const specter: Specialization = {
  name: 'Specter',
  core: 'thief',
  role: 'support',
  boons: {
    fury: true,
    vigor: true,
    swiftness: true
  },
  misc: {
    daze: true,
    healing: true,
    barrier: true,
    stealth: true,
    pull: true
  }
}
const tempest: Specialization = {
  name: 'Tempest',
  core: 'elementalist',
  role: 'support',
  boons: {
    protection: true,
    might: true,
    regen: true,
    vigor: true
  },
  misc: {
    healing: true
  }
}
const weaver: Specialization = {
  name: 'Weaver',
  core: 'elementalist',
  role: 'damage',
  boons: {},
  misc: {}
}
const catalyst: Specialization = {
  name: 'Catalyst',
  core: 'elementalist',
  role: 'damage',
  boons: {},
  misc: {}
}

const chronomancer: Specialization = {
  name: 'Chronomancer',
  core: 'mesmer',
  role: 'cc',
  boons: {
    stability: true
  },
  misc: {
    daze: true,
    float: true,
    knockdown: true,
    pull: true
  }
}

const virtuoso: Specialization = {
  name: 'Virtuoso',
  core: 'mesmer',
  role: 'damage',
  boons: {},
  misc: {
    daze: true,
    knockback: true
  }
}

const reaper: Specialization = {
  name: 'Reaper',
  core: 'necromancer',
  role: 'damage',
  boons: {},
  misc: {
    stun: true
  }
}
const scourge: Specialization = {
  name: 'Scourge',
  core: 'necromancer',
  role: 'damage',
  boons: {
    stability: true
  },
  misc: {
    barrier: true
  }
}
const harbinger: Specialization = {
  name: 'Harbinger',
  core: 'necromancer',
  role: 'damage',
  boons: {},
  misc: {}
}

export const defs = {
  guardian,
  dragonhunter,
  firebrand,
  willbender,
  herald,
  renegade,
  vindicator,
  berserker,
  spellbreaker,
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
}
