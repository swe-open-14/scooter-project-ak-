const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp extends User{
  // ScooterApp code here
  static registeredUsers = {};
  constructor(username, password, age, regUser, regScoot, stations) {
    super(username, password, age);
    this.regUser = regUser;
    this.regScoot = regScoot;
    this.stations = {Euston: [], Kings_Cross: [], Paddington: []};
  }
  
  registerUser(username, password, age){
    if((username in ScooterApp.registeredUsers == false) && (age>=18)){
      ScooterApp.registeredUsers[username] = password;
      this.regUser = new User(username, password, age);
      return 'user has been registered'
    }else if(age<18){
      throw new Error('too young to register'); 
    }else{
      throw new Error('already registered');
    }

  }
  loginUser(username, password){
    if(username in ScooterApp.registeredUsers){
      this.regUser.login(password)
      return "user has been logged in"
    }else{
      console.log("username or password is incorrect")
    }
  }
  logoutUser(username){
    if(username in ScooterApp.registeredUsers){
      this.regUser.logout()
      return 'user has logged out'
    }else{
      throw new Error("no such user is logged in")
    }
  }
  //solve this method
  createScooter(station){
    if(station in this.stations){
      this.regScoot = new Scooter(station)
      this.stations.station.push(this.regScoot)
    }else if(!(station in this.stations)){
      throw new Error('no such station exist')
    }else{

    }

  }
  dockScooter(scooter, station){
    if(station in this.stations){
      this.stations.station.push(scooter)
      return 'scooter is docked';
    }else if(!(station in this.stations)){
      return 'no such station'
    }else{
      return 'scooter already at station'
    }
  }
  rentScooter(scooter, username){
  }

  print(){
    console.log(ScooterApp.registeredUsers)
    console.log(this.stations)
  }
}

module.exports = ScooterApp
