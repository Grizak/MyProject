let fare = {
  balance: 0,
  calc: function(fz1, fz2) {
    let pay = fz1 + fz2;
    this.balance -= pay;
    if (this.balance < 0) {
      this.balance += pay;
      alert('Your balance passed under 0');
      alert("Your balance can't go under 0");
    } else {
      console.log(this.balance);
    }
  },
  add: function() {
    let addBalance = parseInt(prompt('Please insert a value that is an Integer'), 10);
    if (isNaN(addBalance)) {
      alert('The value you have inserted is not an integer!');
    } else {
      this.balance += addBalance;
      console.log(this.balance);
    }
  },
  reset: function() {
    this.balance = 0;
    console.log(this.balance);
  },
  zone: {
    enter: 0,
    exit: 0,
    enterfunc: function(fz) {
      this.enter = fz;
      console.log("You have enter'd fare zone " + fz)
    },
    exitfunc: function(fz) {
      this.exit = fz;
      console.log("You have exited fare zone " + fz)
      fare.calc(fare.zone.enter, fare.zone.exit); // Correctly reference the outer 'fare' object
    }
  }
};
