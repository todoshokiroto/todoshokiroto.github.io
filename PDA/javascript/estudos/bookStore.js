class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._rating = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get rating(){
      return this._rating;
    }
    addRating(rating){
      this._rating.push(rating)
    }
   toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
      let soma =0;
      for (let i = 0; i <this._rating.length;i++){
        soma += this._rating[i]
      }
      return soma/this._rating.length;
    }
  }
  class Book extends Media{
    constructor(title,author,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages();
    }
  }
  class Movie extends Media{
    constructor(title,director,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  class CD extends Media{
    constructor(title,artist,songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){
      return this._artist
    }
    get songs(){
      return this._songs;
    }
  }
  const historyOfEverything = new Book('A short History of Everything','Bill Bryson', '544');
  
  for(let i = 0; i < 4; i++)
    historyOfEverything.addRating(i*3)
  console.log(historyOfEverything);
  console.log(historyOfEverything.getAverageRating())
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)