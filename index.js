function receivesAFunction(thing) {
    return thing()
}

const returnsANamedFunction = function () {
    return function namedFunction() {
        
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
    
}


