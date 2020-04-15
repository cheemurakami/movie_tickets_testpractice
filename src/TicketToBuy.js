export function TicketToBuy (){ 
  this.ticketPrices = [];
  this.currentId = 0;
  console.log(TicketToBuy);
}

TicketToBuy.prototype.addTicketPrice = function(ticketPrice) {
  ticket.id = this.assignId();
  this.ticketPrices.push(ticketPrice);
}

TicketToBuy.prototype.assignId = function () {
  this.currentId += 1
  return this.currentId
}

TicketToBuy.prototype.findTicket = function (id) {
  for (var i = 0; i < this.ticketPrices.length; i++) {
    if (this.ticketPrices[i]) {
      if (this.ticketPrices[i].id == id) {
        return this.ticketPrices[i];
      }
    }
  }
  return false;
}
