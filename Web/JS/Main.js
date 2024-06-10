let fare = {
  balance: 0,
  calc: function(fz1, fz2) {
    let pay = fz1 + fz2;
    this.balance -= pay;
    if (this.balance < 0) {
      this.balance += pay;
      alert('Your balance passed under 0');
      alert("Your balance can't go under 0");
      document.getElementById('bal').textContent = fare.balance;
    } else {
      document.getElementById('bal').textContent = fare.balance;
    }
  },
  add: function() {
    let addBalance = parseInt(prompt('Please insert a value that is an Integer'), 10);
    if (isNaN(addBalance)) {
      alert('The value you have inserted is not an integer!');
    } else {
      this.balance += addBalance;
      document.getElementById('bal').textContent = fare.balance;
    }
  },
  reset: function() {
    this.balance = 0;
    document.getElementById('bal').textContent = fare.balance;
  },
  zone: {
    enter: 0,
    exit: 0,
    enterd: false,
    enterzone: 0, // Defined enterzone
    exitzone: 0,  // Defined exitzone
    enterfunc: function(fz) {
      this.enter = fz;
      console.log("You have enter'd fare zone " + fz);
      this.enterd = true;
      document.getElementById('bal').textContent = fare.balance;
    },
    exitfunc: function(fz) {
      this.exit = fz;
      console.log("You have exited fare zone " + fz);
      fare.calc(fare.zone.enter, fare.zone.exit); // Correctly reference the outer 'fare' object
      this.enterd = false;
      document.getElementById('bal').textContent = fare.balance;
    },
    toggleenterexit: function (fz) {
      if (!this.enterd) {
        this.enterzone = fz;
        this.enterfunc(this.enterzone);
        document.getElementById('bal').textContent = fare.balance;
      } else {
        this.exitzone = fz;
        this.exitfunc(this.exitzone);
        document.getElementById('bal').textContent = fare.balance;
      }
    }
  }
};

document.getElementById('bal').textContent = fare.balance;