const list = [2, 4, 6, 2, 5];

function largestSum(list) {

    var sum = 0,
        rightNeightbor = null,
        nonAdjacentNubmer = list[0];

    for(var i = 0; i < list.length; ++i) {
        nonAdjacentNubmer = list[i];
        if(nonAdjacentNubmer != rightNeightbor) {
            rightNeightbor = list[i + 1];
            sum += nonAdjacentNubmer;
        }
    }

    return sum;

}


var sum = largestSum(list);
console.log(sum);