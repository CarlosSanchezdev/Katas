
const hola = require ('../src/fizzBuzz')

test('introducimos 3 seria igual a FIZZ', () => {
    expect(hola(3)).toBe('FIZZ');
});

test('introducimos 3 seria igual a FIZZ', () => {
    expect(hola(5)).toBe('BUZZ');
});

test('introducimos 3 seria igual a FIZZ', () => {
    expect(hola(15)).toBe('FIZZBUZZ');
});

test('introducimos 3 seria igual a FIZZ', () => {
    expect(hola(4)).toBe(4);
});



