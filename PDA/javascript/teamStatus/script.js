const team = {
    _player : [
      {firstName: 'Siqueira', lastName: 'Pericles', age: 25},
      {firstName: 'Luis', lastName: 'Lula', age: 64}, 
      {firstName: 'Gab', lastName: 'Vieira',age: 17}
    ], 
    _games : [
    {oponents:'Eagles', teamPoints:3, oponentPoints:4},
    {oponents:'Bulls', teamPoints: 7,oponentPoints:3},
    {oponents:'Angels', teamPoints: 0,oponentPoints:7}],
    get players (){
      return this._player;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName,lastName,age){
      let player ={
        firstName,
        lastName,
        age
      }
      this._player.push(player)
    },
    addGames(oponent,teamPoint,oponentPoint){
      let game ={
        oponent,
        teamPoint,
        oponentPoint
      }
      this._games.push(game)
    }
  }
  team.addPlayer('Lucas','Manoelino',19);
  console.log(team.players);
  team.addGames('Angels',3,2);
  console.log(team.games)