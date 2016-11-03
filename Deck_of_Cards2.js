function Card(val,suit){
  if (!(this instanceof Card)) {
   return new Card();
 }
 this.suit=suit;
 this.val=val;
 }
function Deck(){
  if (!(this instanceof Deck)) {
   return this;
 }
this.deckofcards=[];
var suits = ["Clubs","Diamonds","Hearts","Spades"];
var range = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
 for (var i = 0; i<suits.length; i++){
   for (var j = 0; j<range.length; j++){
     this.deckofcards.push(new Card(suits[i],range[j]));
   }}
  //  console.log(this.deck);
  return this;
 }

Deck.prototype.shuffle = function(){
  var m = this.deckofcards.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this.deckofcards[m];
    this.deckofcards[m] = this.deckofcards[i];
    this.deckofcards[i] = t;
  }
  // console.log(this.deck)
  return this;
};
// Deck1.shuffle();

Deck.prototype.deal = function(){
  // this.shuffle();
  // console.log(this.card);
  return this.deckofcards.pop();
  // console.log(this.card);
  // console.log(this.deck);
  }

function Player(name, deck){
  if (!(this instanceof Player)) {
   return new Player();
 }
  this.deckofcards = deck;
  this.name = name;
  this.hand = [];
  return this;
}

Player1 = new Player();

Player.prototype.take = function(){
  this.deckofcards.deal();
  this.hand.push(this.deckofcards.deal());
  console.log("Player1 name is", this.name);
  console.log("After shuffling the card dealt to you is", (this.hand));
  return this;
}

Player.prototype.disgard = function(){
  // this.take();
  // console.log(this.hand);
  console.log("Now disgarding your card...")
  this.hand.pop();
  console.log("Now your hand has the following card. =>", this.hand);
  // console.log(this.deckofcards);
  // console.log(Object.keys(this.deckofcards).length);
  // if this.hand.length == 0;{
  //   console.log("You now have an empyt hand.")
  // }
  return this;
}

Deck1 = new Deck();
Deck1.shuffle();
Player1 = new Player("Raymond", Deck1);
Player1.take().disgard();
