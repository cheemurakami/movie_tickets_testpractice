
export function TicketPrice(age, movieTitle, showTime, price) {
  this.age = age;
  this.movieTitle = movieTitle;
  this.showTime = showTime;
  this.price = price;
  
}
TicketPrice.prototype.price = function() {
  let price = 12;
  if (this.age === "child") {
    price *= .05;
  } else if (this.age === "senior") {
    price *= .07;
  } else {
    price *= 1.4;
  }
  return this.price = price;
  // console.log(TicketPrice);
}

 



