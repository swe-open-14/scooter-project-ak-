const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter c test cases', () => {
  const testSct = new Scooter('Euston')
  test('check station property', () => {
    // edit this to be a real test!
    expect(testSct instanceof Scooter).toBe(true);
  }
  )
  test('check serial number property', () => {
    expect(testSct.serial).toBe(1);
  })

})

//Method tests
describe('scooter methods', () => {
  const testSct = new Scooter('Paddington')
  testSct.charge = 20
  // tests here!
  //rent method
  test('check rent method', () => {
    expect(() => {testSct.rent()}).toThrow("scooter needs to charge")
  })
  //dock method
  test('check dock method', () => {
    expect(testSct.dock('Euston')).toEqual()
  })


  //requestRepair method

  //charge method

})
