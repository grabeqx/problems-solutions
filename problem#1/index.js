const list = [10, 15, 3, 7];


function getNubmersUpToValue(list, value, numbers) {
    var numbers = numbers || [];
    var number = list.shift(1);
    if((list.length <= 2) || (numbers.length > 0)) {
        return numbers.length > 0 ? true : false;
    }
    list.forEach(function(secNumber) {
        if((number + secNumber) === value) {
            if(numbers.indexOf(number) === -1) {
                numbers.push(number);
                numbers.push(secNumber);
            }
        }
    });

    return getNubmersUpToValue(list, value, numbers);
}


var numbers = getNubmersUpToValue(list, 17);
console.log(numbers);