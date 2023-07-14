class School{
    constructor(name,level,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    };
    get level(){
      return this._level;
    };
    get numberOfStudents(){
      return this._numberOfStudents;
    };
    set numberOfStudents(number){
      if(typeof number == string)
        this._numberOfStundets = number;
      else
        console.log('Wrong type')
    };
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level`)
    };
    static pickSubstituteTeachers(){
      let substitutes = ['Eu','tu','nos']
      return substitutes[Math.floor(Math.random*substitutes.length)]
    };
  }
  class Primary extends School{
    constructor(name,level,numberOfStudents,pickupPolicy){
      super(name,level,numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  }
  class Middle extends School{
    constructor(name,level,numberOfStudents){
      super(name,level,numberOfStudents);
    }
  }
  class High extends School{
    constructor(name,level,numberOfStudents,sportsTeams){
      super(name,level,numberOfStudents);
      this._sportsTemas = sportsTeams;
    }
  }
  const CEFET = new Middle('CEFET','Middle',300)
  const school = new School('CEFET','Middle',300)
  console.log(School.pickSubstituteTeachers())