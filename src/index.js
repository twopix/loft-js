/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
    if (!Array.isArray(array) || array.length == 0) {
        throw new Error('empty array');
    }
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    for (var i=0; i< array.length; i++) {
        if (!fn(array[i])) {
            return false;
        }
    }

    return true;

}

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    if (!Array.isArray(array) || array.length == 0) {
        throw new Error('empty array');
    }
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    for (var i=0; i< array.length; i++) {
        if (fn(array[i])) {
            return true;
        }
    }

    return true;
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var arg = [...arguments],
        arr = [];

    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    for (var i=1; i<arg.length; i++ ) {
        try {
            fn(arg[i]);
        } catch (e) {
            arr.push(arg[i]);
        }
    }

    return arr;
}

/*
 Задача 4:
 Используя отладчик и точки остановки, определите в каких случаях if дает true
 Исправьте условие внутри if таким образом, чтобы функция возвращала true
 */
function findError(data1, data2) {
    return (function() {
        for (var i = 0; i < data1.length; i++) {
            if (isNaN(data1[i]) != isNaN(data2[i])) {
                return false;
            }
        }

        return true;
    })();
}

/*
 Задача 5:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданным аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number=0) {

    if (typeof number != 'number') {
        throw new Error('number is not a number');
    }

    var Q = {
        sum: function () {
            var arg = [...arguments],
                result = number;

            for (var i = 0; i<arg.length; i++) {
                result += result + arg[i];
            }

            return result;
        },
        dif: function () {
            var arg = [...arguments],
                result = number;

            for (var i = 0; i<arg.length; i++) {
                result += result - arg[i];
            }

            return result;
        },
        div: function () {
            var arg = [...arguments],
                result = number;

            // debugger;
            for (var i=0; i<arg.length; i++ ) {
                if (arg[i] == 0 ) {
                    throw new Error('division by 0');
                }
                result += result / arg[i];
            }

            return result;
        },
        mul: function () {
            var arg = [...arguments],
                result = number;

            for (var i = 0; i<arg.length; i++) {
                result += result * arg[i];
            }

            return result;
        }
    }

    return Q;

}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    findError,
    calculator
};