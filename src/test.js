/**
 * Created by george on 11/2/2017.
 */
var array = [1, 2, 3, 4, 5, 6, 7];
console.log('length;', array.length);

console.log('sloies', array.slice(-25, 26));

console.log('slised', sliced(array,-25,26));

function sliced(array, from, to) {
    var arr = [];

    //проверить если это число
    if(isNaN(from ) || isNaN(to)) {
        return [];
    }

    // проверяем отрецательные индексы
    // если меньше длины массива, возращаем ноль
    if (to<0) {

        if(to < -array.length) {
            to = 0;
        } else {
            to = to + array.length;
        }
    }
    if (from<0) {
        if (from < -array.length) {
            from = 0
        } else {
            from = from + array.length;
        }
    }


    // проверям числа больше длины массива
    if (to>array.length) {
            to = array[array.length-1];
    }
    if (from>0) {
        from = array[array.length-1];
    }


    for (from; from < to; from++) {
        arr.push(array[from]);
    }

    return arr;

}


// console.log(array);

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


