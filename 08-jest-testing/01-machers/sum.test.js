const sum = require('./sum');

describe('Example tests', () => {
    it('Should add 1 + 2 to equal 3', () => {
        const result = sum(1, 2);

        expect(result).toBe(3);
    });

    it('Object assignment', () => {
        const obj = {};

        // expect(obj).toBe({}); // failed
        expect(obj).toEqual({});
    });
});

describe('Truthy or falsy', () => {
    it('Null', () => {
        const n = null;
        // const n = 0;
        // const n = '';

        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
        expect(n).not.toBeUndefined();
    });
});

describe('Numbers', () => {
    it('2 + 2', () => {
        const value = 2 + 2;

        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    });

    it('Adding floats', () => {
        const value = 0.1 + 0.2;

        expect(value).toBeCloseTo(0.3);
    });
});

describe('String', () => {
    it('There is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });
});

describe('Arrays', () => {
    const shoppingList = [
        'Diapers',
        'Kleenex',
        'Trash bags',
        'Paper towels',
        'Milk',
    ];

    expect(shoppingList).toContain('Milk');
});

const compileAndroidCode = () => {
    throw new Error('You are using the wrong JDK');
};

describe('Exceptions', () => {
    it('Compiling Android goes as expected', () => {
        expect(() => compileAndroidCode()).toThrow(Error);
        expect(() => compileAndroidCode()).toThrow(
            'You are using the wrong JDK'
        );
    });
});
