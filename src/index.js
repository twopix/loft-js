/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    var ms = seconds*1000;

    var p = new Promise(
        function (resolve, reject) {
            setTimeout(resolve, ms);
        }
    );
    p.then(function () {
        return p;
    });
    return p;



}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'json';
    req.send();
    
    return new Promise(function (resolve, reject)  {
        req.onload = function() {
            if (req.status == 200) { 
                    resolve(
                        req.response.sort(
                            function(a,b) {
                                if(a.name < b.name) return -1;
                                if(a.name > b.name) return 1;
                                return 0;
                            }
                        )
                    );
     
            } else {
                    reject(req.response);
            }
        }

    });
}
export {
    delayPromise,
    loadAndSortTowns
};
