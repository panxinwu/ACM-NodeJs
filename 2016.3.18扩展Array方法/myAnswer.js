// TODO
Array.prototype.square = function(){
   return   this.map(function(e){return e*e});
}

Array.prototype.cube = function(){
    return this.map(function(e){return e*e*e});
}

Array.prototype.sum = function() {
    return this.length?this.reduce(function(e,b){return e+b}):0;
}

Array.prototype.average = function() {
    return this.sum()/this.length;
}

Array.prototype.even = function(){
    return this.filter(function(e){return e%2 == 0;});
}
Array.prototype.odd = function(){
    return this.filter(function(e){return e%2;});
}
