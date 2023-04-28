const { TestWatcher } = require('jest')
const User = require('../src/User')

// User tests here
describe('user class test cases', () => {
    const newUser = new User('ali', '1234', 19)
    // test username
    test('check username property', () => {
        expect(newUser.username).toEqual('ali')
    })
    // test password
    test('check password property', () => {
        expect(newUser.password).toEqual('1234')
    })
    // test age
    test('check age property', () => {
        expect(newUser.age).toEqual(19)
    })

    //test login
    // test('check login method', () => {
    //     expect(newUser.login(1234)).toBeTruthy(newUser.loggedIn)
    // })
})


// test login

// test logout
