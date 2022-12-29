const Thermostat = require('./thermostat')
const thermostat = new Thermostat();

class View {
  constructor() {
    this.upButtonEl = document.querySelector('#upButton');
    this.downButtonEl = document.querySelector('#downButton');
    this.psmButtonEl = document.querySelector('#psmButton');
    this.usageButtonEl = document.querySelector('#usageButton');
    this.upButtonEl.addEventListener('click', () => {
      thermostat.up();
      this.displayThermostat();
      console.log(thermostat.getTemperature())
    });
    this.downButtonEl.addEventListener('click', () => {
      thermostat.down();
      this.displayThermostat();
      console.log(thermostat.getTemperature())
    });
    this.psmButtonEl.addEventListener('click', () => {
      thermostat.setPowerSavingMode();
      this.displayThermostat();
      console.log(thermostat.getTemperature())
    });
    this.usageButtonEl.addEventListener('click', () => {
       thermostat.getUsage();
       this.displayThermostat();
       console.log(thermostat.getTemperature())
    });
  }

  displayThermostat() {
    const displayTemp = document.createElement('h1')
    displayTemp.innerText = thermostat.getTemperature();
    document.querySelector('div.temperature').append(displayTemp);
  }

  updatTemperature() {
    const displayTemp = document.querySelector('h1')
    displayTemp.textContent = thermostat.getTemperature()
    this.displayThermostat()
  }
  

}

module.exports = View;