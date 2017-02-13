/* ДЗ 3 - объекты и массивы */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i=0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var res = [];

    for (var i=0; i<array.length; i++) {
        res.push(fn(array[i], i, array));

    }

    return res;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var prev = array[0];
    var i = 1;

    if (initial) {
        prev = initial;
        i = 0;
    }

    for (i; i < array.length; i++) {
        prev = fn(prev, array[i], i, array);
    }

    return prev;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return (prop in obj);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    return Object.keys(obj);
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var array = Object.keys(obj);

    return array.map(function(x) {
        return x.toUpperCase()
    });

}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from=0, to = array.length) {
    var arr = [];

    // проверить если это число
    if (isNaN(from ) || isNaN(to)) {
        return [];
    }

    // проверяем отрецательные индексы
    if (from < 0) {
        if (from < -array.length) {
            from = 0;
        } else {
            from = from + array.length;
        }
    // проверка положительных индексов больше длины массива
    } else if (from > array.length) {
        from = array.length;
    }

    // the same here...
    if (to < 0) {
        if (to < -array.length) {
            to = 0;
        } else {
            to = to + array.length;
        }
    } else if (to > array.length) {
        to = array.length;
    }

    for (from; from < to; from++) {
        arr.push(array[from]);
    }

    return arr;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return obj;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};