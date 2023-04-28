const User = require("./User");

class Scooter extends User{
  // scooter code here
  static nextSerial = 1;

  constructor(station, username, user, serial, charge, isBroken){
    super(username);
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = false;
    Scooter.nextSerial += 1
  }
  
  rent(){
    if(this.charge > 20 && this.isBroken == false){
      this.station = null
      this.user = this.username;
    }else if(this.charge <= 20){
      throw new Error("scooter needs to charge")
    }else{
      throw new Error("scooter needs repair")
    }
  }
  dock(station){
    this.station = station;
    this.user = null;
  }
}


module.exports = Scooter
