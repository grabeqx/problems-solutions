function sheduler(fn, n) {
    return setTimeout(fn, n);
};


sheduler(function() {
    console.log('easy in js');
}, 1000)