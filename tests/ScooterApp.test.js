const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterApp class test cases', () => {
    const newUser = new ScooterApp()
    test('register user method works', () => {
        expect(newUser.registerUser('ali', '1234', 19)).toEqual('user has been registered')
    })
    const failUser = new ScooterApp()
    test('register user method works (fail)', () => {
        expect(() => {failUser.registerUser('bill', '4243', 17)}).toThrow('too young to register')
    })
    test('login user method works', () => {
        expect(newUser.loginUser('ali', '1234')).toBe('user has been logged in')
    })
    test('logout user method works', () => {
        expect(newUser.logoutUser('ali')).toBe('user has logged out')
    })
    test('dock scooter method works', () => {
        expect(newUser.dockScooter())
    })
})

