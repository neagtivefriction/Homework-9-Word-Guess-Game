var Letter = function(val) {
  // Check whether or not the user has guessed this letter. Defaults to false, since the user will not have guessed anything initially.

  // The letter that this should display if the user has guessed it.
  this.val = val;
  this.guessed = false;
  if (this.val === " ") {
    this.guessed = true;
  }

  this.isGuessed = function() {
    if (this.guessed | (this.val === " ")) {
      // console.log("Guessed it");
      return " " + val + " ";
    } else {
      return " _ ";
    }
  };

  this.guess = function(userGuess) {
    if (userGuess === this.val) {
      this.guessed = true;
      return true;
    }
    return false;
  };
};

module.exports = Letter;
