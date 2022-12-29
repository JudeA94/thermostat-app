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
      this.updateTemperature();
      console.log(thermostat.getTemperature())
    });
    this.downButtonEl.addEventListener('click', () => {
      thermostat.down();
      this.updateTemperature();
      console.log(thermostat.getTemperature())
    });
    this.psmButtonEl.addEventListener('click', () => {
      thermostat.setPowerSavingMode();
      this.updateTemperature();
      this.updatePSM()
      console.log(thermostat.getTemperature())
    });
    this.usageButtonEl.addEventListener('click', () => {
       thermostat.getUsage();
       this.updateUsage();
       console.log(thermostat.getUsage())
    });
    this.updateTemperature();
  }

  updateTemperature() {
    const displayTemp = document.querySelector('h1')
    displayTemp.innerText = `${thermostat.getTemperature()}\u00B0`
  }
  
  updatePSM() {
    const light = document.querySelector('.dot')
    if(thermostat.getPSM() === true) {
      light.style.backgroundColor = 'green';
    } else {
      light.style.backgroundColor = 'red';
    }
  }

  updateUsage() {
    const displayText = document.querySelector('h1')
    displayText.innerText = thermostat.getUsage()
    setTimeout(this.updateTemperature,1500);
  }

}

module.exports = View;