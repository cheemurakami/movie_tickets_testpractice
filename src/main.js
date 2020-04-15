import { TicketToBuy } from './TicketToBuy';
import { TicketPrice } from './TicketPrice';
import './styles.css';
import $ from 'jquery';


var ticketsToBuy = new TicketToBuy();

function showTicket(ticketsToBuy) {
  var ticket = ticketsToBuy.findTicket(ticketsToBuy.currentId);
  console.log("TicketsToBuy: ", ticketsToBuy)
  // console.log("ticket: ", i)
  $("#output").show();
  $(".movie").html(ticket.movieTitle);
  $(".ticket-price").html(ticket.price);
}


$(document).ready(function(){
  $("#output").show();
  $("#form-container").submit(function(event){
    event.preventDefault();
    var inputtedAge = $("#age").val();
    var inputtedMovie = $("#movie-title").val();
    var inputtedShowTime = $("#show-time").val();
    
    
    var newTicketPrice = new TicketPrice (inputtedAge, inputtedMovie, inputtedShowTime);
    ticketsToBuy.addTicketPrice(newTicketPrice);
    // displayTicketDetails(ticketsToBuy);
    // ticketsToBuy.price(inputtedAge);
    // console.log(ticketsToBuy.price(inputtedAge))
    // displayTicketDetails(Ticket);
    console.log(ticketsToBuy);
    showTicket(ticketsToBuy);
    // ticketsToBuy.price(newTicket)
  });
})