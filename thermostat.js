class Thermostat {
  constructor() {
    this.temperature = 20;
    this.psm = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if(this.temperature < 32) {
      this.temperature++;
    }
    if(this.temperature >= 25 && this.psm === true)
    this.temperature = 25;
  }

  down() {
    if(this.temperature > 10) {
      this.temperature--;
    }
  }

  setPowerSavingMode() {
    this.psm = !this.psm
  }

  reset() {
    this.temperature = 20;
  }

  getUsage() {
    if(this.temperature < 18) {
      return 'Low usage'
    } else if (this.temperature > 25) {
      return 'High usage'
    } else {
      return 'Medium usage'
    }
  }
}

module.exports = Thermostat;