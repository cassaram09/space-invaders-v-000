class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasers = phasers;
    if (crew.length === 0){
      this.docked = true;
    } else {
      this.docked = false;
    }
      this.phasersCharge = "uncharged";
      this.assignCrew();
  }

  assignCrew(){
    this.crew.forEach(crewMember => {crewMember.currentShip = this})
  }
}