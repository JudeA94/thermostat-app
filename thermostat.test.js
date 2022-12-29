const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('starts wirh a temp of 20', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20)
  })
  it('returns 22 when temp upped twice', () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22)
  })
  it('returns 21 when temp upped twice and downed once', () => {
    thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21)
  })
  it('returns 25 when temp upped 10x in psm', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25)
  })
  it('returns lets you turn on and off psm', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    thermostat.setPowerSavingMode()
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(26)
  })
  it('resets the temp to 20', () => {
    thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20)
  })
  it('has a min temp of 10', () => {
    thermostat = new Thermostat();
    thermostat.down()
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10)
  })
  it('if power saving mode is off, the maximum temperature is 32 degrees', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode()
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32)
  })
  it('low-usage for temp < 18', () => {
    thermostat = new Thermostat();
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getUsage()).toBe('Low usage')
  })
  it('medium-usage for temp 18 < temp <= 25', () => {
    thermostat = new Thermostat();
    expect(thermostat.getUsage()).toBe('Medium usage')
  })
  it('high-usage for temp > 26', () => {
    thermostat = new Thermostat();
    thermostat.setPowerSavingMode();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getUsage()).toBe('High usage')
  })
})