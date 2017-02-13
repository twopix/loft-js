/**
 * Created by george on 11/2/2017.
 */
var human1 = {
    name: 'George',
    lasname: 'Melidis',
    haircolor: 'black',
    someProp: {
        prop1: 1,
        prob2: 2
    },
    valueOf: function () {
       return 100;
    },
    toString: function () {
        return 20;
    }
};
var human2 = {
    name: 'George',
    lasname: 'Melidis',
    haircolor: 'black',
    someProp: {
        prop1: 1,
        prob2: 2
    },
    valueOf: function () {
        return 60;
    },
    toString: function () {
        return null;
    }
};
var a = [2,4,5,6,7,7];

// console.log(a+ '111');
// console.log(human2);


function equal(obj1, obj2) {
    var lenght1 = Object.keys(obj1).length;
    var lenght2 = Object.keys(obj2).length;

    if (lenght1 != lenght2) {
        return false;
    }

    for (var prop in obj1) {
        if (typeof obj1[prop] == 'object') {
            return equal(obj1[prop],obj2[prop]);
        } else if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    // if (hum)

    return true;
}

// console.log(human1);
// console.log(equal(human1, human2));


