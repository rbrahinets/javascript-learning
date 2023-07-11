let animals = ['Elephant', 'Zebra', 'Bear', 'Tiger'];

describe('Animals array', () => {
    // beforeAll(() => {
    //     console.log('BEFORE ALL');
    //     animals = ['Elephant', 'Zebra', 'Bear', 'Tiger'];
    // });

    beforeEach(() => {
        console.log('BEFORE EACH');
        animals = ['Elephant', 'Zebra', 'Bear', 'Tiger'];
    });

    // afterEach(() => {
    //     console.log('AFTER EACH');
    //     animals = ['Elephant', 'Zebra', 'Bear', 'Tiger'];
    // });

    // afterAll(() => {
    //     console.log('AFTER ALL');
    //     animals = ['Elephant', 'Zebra', 'Bear', 'Tiger'];
    // });

    it('Should add animal to end of array', () => {
        animals.push('Aligator');
        expect(animals[animals.length - 1]).toBe('Aligator');
    });

    it('Should add animal to end of array', () => {
        animals.unshift('Monkey');
        expect(animals[0]).toBe('Monkey');
    });

    it('Should have initial length of 4', () => {
        expect(animals.length).toBe(4);
    });
});

describe('Testing something else', () => {
    it('True should be truthy', () => {
        expect(true).toBeTruthy();
    });
});
