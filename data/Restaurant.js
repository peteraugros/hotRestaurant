const customer = require('./customer');

class Restaurant {
  constructor(seated, capacity, waiting){
    this.seated = [];
    this.capacity = 5;
    this.waiting = [];
  }
}

Restaurant.prototype.addCustomer = function(customer){
  console.log("adding customer to restaurant");
  if(this.seated.length >= this.capacity){
    console.log('You have been added to the waitlist...motherfucker');
    this.waiting.push(customer);
}else{
  this.seated.push(customer);
  console.log("you have been seated!");
}
console.log("Waiting:", this.waiting);
console.log("SEATED:", this.seated);
}

module.exports = Restaurant;