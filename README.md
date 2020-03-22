# @martin.kwan/object-operator

[![npm (scoped)](https://img.shields.io/npm/v/@martin.kwan/object-operator.svg)](https://github.com/martinmadhead/object-operator)

This is a package for doing operators for objects.

# Install
```
npm i @martin.kwan/object-operator
```

# Usage
- objectAdd - (object1, object2, optional string array of keys for ignore keys)
    - numbers: addition
    - string: concat
    - boolean: return original value
- objectMinus - (object1, object2, optional string array of keys for ignore keys)
    - numbers: subtraction
    - string: remove the substring in object2 that exist in object1
    - boolean: return original value 
```
import { objectAdd, objectMinus } from '@martin.kwan/object-operator';

const object1 = { myNumber: 1, ignoreNumber: 2, myString: 'test', ignoreString: 'abc' };
const object2 = { myNumber: 2, ignoreNumber: 3, myString: 'ing', ignoreString: 'def' };
const result = objectAdd(object1, object2, [ 'ignoreNumber', 'ignoreString' ]);
// result: { myNumber: 3, ignoreNumber: 2, myString: 'testing', ignoreString: 'abc' }

const object3 = { myNumber: 1, ignoreNumber: 2, myString: 'testing' };
const object4 = { myNumber: 2, ignoreNumber: 3, myString: 'ing' };
const result2 = objectMinus(object3, object4, [ 'ignoreNumber' ]);
// result2: { myNumber: -1, ignoreNumber: 2, myString: 'test' }
```
