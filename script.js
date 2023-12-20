
function countdownFromTen(callback) {
  setTimeout(function() {
    console.log(10);
    document.body.innerHTML = 10;
    callback();
  }, 1000);
}

function countdownFromNine(callback) {
  setTimeout(function() {
    console.log(9);
    document.body.innerHTML = 9;
    callback();
  }, 1000);
}

function countdownFromeight(callback) {
    setTimeout(function() {
      console.log(8);
      document.body.innerHTML = 8;
      callback();
    }, 1000);
  }

function countdownFromseven(callback) {
    setTimeout(function() {
      console.log(7);
      document.body.innerHTML = 7;
      callback();
    }, 1000);
  }

  function countdownFromsix(callback) {
    setTimeout(function() {
      console.log(6);
      document.body.innerHTML = 6;
      callback();
    }, 1000);
  }

  function countdownFromfive(callback) {
    setTimeout(function() {
      console.log(5);
      document.body.innerHTML = 5;
      callback();
    }, 1000);
  }

  function countdownFromfour(callback) {
    setTimeout(function() {
      console.log(4);
      document.body.innerHTML = 4;
      callback();
    }, 1000);
  }

  function countdownFromthree(callback) {
    setTimeout(function() {
      console.log(3);
      document.body.innerHTML = 3;
      callback();
    }, 1000);
  }

  function countdownFromtwo(callback) {
    setTimeout(function() {
      console.log(2);
      document.body.innerHTML = 2;
      callback();
    }, 1000);
  }

// Continue this pattern until 1...

function countdownFromOne(callback) {
  setTimeout(function() {
    console.log(1);
    document.body.innerHTML = 1;
    callback();
  }, 1000);
}

function displayMessage() {
  setTimeout(function() {
    console.log('Happy Independence Day');
    
    document.body.innerHTML = 'Happy Independence Day';
  }, 1000);
}

// Using callback hell to chain the countdowns and the message display
countdownFromTen(function() {
  countdownFromNine(function() {
    countdownFromeight(function() {
        countdownFromseven(function() {
            countdownFromsix(function() {
                countdownFromfive(function() {
                    countdownFromfour(function() {
                        countdownFromthree(function() {
                            countdownFromtwo(function() {
                              countdownFromOne(function() {
                                displayMessage();
       // After counting down to 1, display the message
                              });
                            });
                        });
                    });
                });
            });
        });
    });
});
});

