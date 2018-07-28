const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','q','v','w','x','y','z'];


function getAllWays(number) {

    var encoded = number.toString();
    encoded = [...encoded];
    var one = '',
        two = '',
        longerNumber = [],
        decoded = [];
    console.log(encoded);
    for(var i in encoded) {
        if(parseInt(encoded[i]) > 0) {
            one += alphabet[encoded[i] -1];
            longerNumber.push(encoded[i]);
            if(longerNumber.length == 2) {
                two += alphabet[longerNumber.join('') - 1];
            }
        }
    }
    
    decoded.push(one);
    decoded.push(two);
    return decoded;

};

var decoded = getAllWays(112);
console.log(decoded);