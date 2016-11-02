function Card(){
  if (!(this instanceof Deck)) {
   return new Deck();
 }
  this.cards=[];
  this.suits = ["Clubs","Diamonds","Hearts","Spades"];
  this.range = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  for (var i = 0; i<this.suits.length; i++){
    for (var j = 0; j<this.range.length; j++){
      cards.push(this.range[j] +" of " + this.suits[i]);
    }
  }
  // console.log(cards);
  }
Deck();
// console.log(cards);
var deck1 = new Deck();
console.log(deck1.cards);
// deck1.prototype.shuffle = function(){
//   console.log(cards)
  // var m = this.cards.length, t, i;
  // While there remain elements to shuffle…
  // while (m) {
    // Pick a remaining element…
    // i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    // t = this.card[m];
    // this.card[m] = this.card[i];
    // this.card[i] = t;
  // }
  // return;
// };
// deck1.prototype.shuffle();

// Deck.prototype.reset = function (card) {
//   var m = this.card.length, t, i;
//   // While there remain elements to shuffle…
//   while (m) {
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//     // And swap it with the current element.
//     t = this.card[m];
//     this.card[m] = this.card[i];
//     this.card[i] = t;
//   }
//   return this.card;
// };



function Player(){
  if (!(this instanceof Player)) {
   return new Player();
 }
  this.name = name;
  this.hand = 1;
}
