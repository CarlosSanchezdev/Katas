const gameDie = require ('./script')

test('Tijeras contra papel', () => {
    expect(gameDie('tijeras','papel')).toBe('Gana tijeras');
});

test('El papel cubre la roca', () => {
    expect(gameDie('papel','roca')).toBe('Gana papel');
});

test('Lagarto aplasta la roca', () => {
    expect(gameDie('lagarto','roca')).toBe('Gana lagarto');
});

test('Lagarto envenena a Spock', () => {
    expect(gameDie('lagarto','spock')).toBe('Gana lagarto');
});

test('Spock rompe (o derrite) las tijeras', () => {
    expect(gameDie('spock','tijeras')).toBe('Gana spock');
});

test('Tijeras decapitan a lagarto', () => {
    expect(gameDie('tijeras','lagarto')).toBe('Gana tijeras');
});

test('Lagarto come papel', () => {
    expect(gameDie('lagarto','papel')).toBe('Gana lagarto');
});

test('El papel refuta a Spock', () => {
    expect(gameDie('papel','spock')).toBe('Gana papel');
});

test('Spock vaporiza la roca', () => {
    expect(gameDie('spock','roca')).toBe('Gana spock');
});

test('Tijeras para romper rocas', () => {
    expect(gameDie('tijeras','rocas')).toBe('Gana tijeras');
});

test('Tijeras para romper rocas2', () => {
    expect(gameDie('lagarto','tijeras')).toBe('Gana tijeras');
});