export type Operator = '+' | '-';

export function objectAdd(obj1: any, obj2: any, ignoreKeys: string[] = []) {
    const newObject: any = JSON.parse(JSON.stringify(obj1));
    for (const key of Object.keys(obj2)) {
        const myKey = ignoreKeys.find(ignoreKey => ignoreKey === key);
        if (myKey) {
            continue;
        }

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            newObject[key] = objectAdd(obj1[key], obj2[key]);
        } else {
            switch(typeof obj1[key]) {
                case 'number': newObject[key] = obj1[key] + obj2[key]; break;
                case 'string': newObject[key] = obj1[key] + obj2[key]; break;
                default:
            }
        }
    }
    return newObject;
}

export function objectMinus(obj1: any, obj2: any, ignoreKeys: string[] = []) {
    const newObject: any = JSON.parse(JSON.stringify(obj1));
    for (const key of Object.keys(obj2)) {
        const myKey = ignoreKeys.find(ignoreKey => ignoreKey === key);
        if (myKey) {
            continue;
        }

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            objectMinus(obj1[key], obj2[key]);
        } else {
            switch(typeof obj1[key]) {
                case 'number': newObject[key] = obj1[key] - obj2[key]; break;
                case 'string': newObject[key] = obj1[key].replace(obj2[key], ''); break;
                default:
            }
        }
    }
    return newObject;
}

module.exports = (obj1: any, obj2: any, operator: Operator, ignoreKeys: string[] = []) => {
    switch(operator) {
        case '+': return objectAdd(obj1, obj2, ignoreKeys);
        case '-': return objectMinus(obj1, obj2, ignoreKeys);
    }
}
