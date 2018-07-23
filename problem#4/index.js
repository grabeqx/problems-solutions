function cons(a,b) {
    return (f) => f(a,b);
}


function car(pair) {
    return pair((a,b) => {
        return a;
    });
}

function cdr(pair) {
    return pair((a,b) => {
        return b;
    });
}


console.log(car(cons(3,4)));
console.log(cdr(cons(3,4)));