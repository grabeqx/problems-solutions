var list = [1, 2, 0];

function findLowestPositive(list) {

    let result = [],
        resLenght = 0;
    for(let i = 0; i < list.length; ++i) {
        if(list[i] >= 0) {
            result[list[i]] = true;
        }
    }
    
    for(let i = 1; i <= result.length; i++) {
        if(result[i] === undefined) {
            return i;
        }
    }

    return 1;

}

var lowest = findLowestPositive(list);
console.log(lowest);