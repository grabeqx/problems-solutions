var list = [1, 2, 3, 4, 5];


function calculateNewValues(list) {

    var newList = [];
    var products_below = [];
    var p = 1;
    for(var i = 0; i < list.length; i++) {
        products_below[i] = p;
        p *= list[i];
    }
    var products_above = [];
    p = 1;
    var l = [];
    var x = '';
    for(var j = list.length - 1; j >= 0; --j) {
        products_above[j] = p;
        p *= list[j];
    }

    for(var x in products_above) {
        newList.push(products_above[x] * products_below[x]);
    }

    return newList;
    
}

var newList = calculateNewValues(list);
console.log(newList);