import { expect } from 'chai';
import { objectAdd, objectMinus } from '../index';

describe('Object Operator', function() {
    it('Object Add', () => {
        const result = objectAdd({ myNumber: 1, myString: 'test', myBoolean: true }, { myNumber: 2, myString: 'ing', myBoolean: true });
        expect(result).to.eql({ myNumber: 3, myString: 'testing', myBoolean: true });
    });

    it('Object Add (with ignore keys)', () => {
        const result = objectAdd({ myNumber: 1, ignoreNumber: 2, myString: 'test', ignoreString: 'abc' }, { myNumber: 2, ignoreNumber: 3, myString: 'ing', ignoreString: 'def' }, [ 'ignoreNumber', 'ignoreString' ]);
        expect(result).to.eql({ myNumber: 3, ignoreNumber: 2, myString: 'testing', ignoreString: 'abc' });
    });

    it('Object Add (with object inside object)', () => {
        const result = objectAdd({ myNumber: 1, myObject: { insideNumber: 1 }, myArray: [ 1, 2 ]}, { myNumber: 2, myObject: { insideNumber: 2 }, myArray: [ 3, 4 ]});
        expect(result).to.eql({ myNumber: 3, myObject: { insideNumber: 3 }, myArray: [ 4, 6 ]});
    });

    it('Object Minus', () => {
        const result = objectMinus({ myNumber: 1, myString: 'testing' }, { myNumber: 2, myString: 'ing' });
        expect(result).to.eql({ myNumber: -1, myString: 'test' });
    });

    it('Object Minus (with ignore keys)', () => {
        const result = objectMinus({ myNumber: 1, ignoreNumber: 2, myString: 'testing' }, { myNumber: 2, ignoreNumber: 3, myString: 'ing' }, [ 'ignoreNumber' ]);
        expect(result).to.eql({ myNumber: -1, ignoreNumber: 2, myString: 'test' });
    });
});
