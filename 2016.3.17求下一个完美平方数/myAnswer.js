function findNextSquare(sq) {
  if(parseInt(Math.sqrt(sq)) == Math.sqrt(sq)){
    for(var i = sq+1;;i++){
      if(parseInt(Math.sqrt(i)) == Math.sqrt(i)){
        return i;
      }
    }
  }else{
    return -1;
  }
}