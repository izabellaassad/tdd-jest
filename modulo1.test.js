const modulo1 = require('./modulo1')

describe('Teste básico func1', () => {
    it(' Retorne valor correto', () => {
        expect(modulo1.func1(10)).toBe(11)
    })
    it(' Teste func2', () => {
        const cb = jest.fn()
        cb.mockReturnValue(1)
        expect(modulo1.func2(10, cb)).toBe(11)
        expect(cb.mock.calls[0][0]).toBe(10)
          console.log(cb.mock.calls)
    })
})