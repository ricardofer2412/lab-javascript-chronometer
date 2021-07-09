class Chronometer {
  constructor() {
    //set Property of class
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // setInterval(() => {
    //   return this.currentTime++;
    // }, 1000);

    if (typeof callback === 'function') {
      setInterval(() => {
        callback();
      });
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(Number(this.currentTime / 60));
  }

  getSeconds() {
    // const secods = this.currentTime
    // while( seconds > 60) {
    //   secods -= 60
    // }
    // return Math.floor()
    return Math.floor(Number(this.currentTime % 60));
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
