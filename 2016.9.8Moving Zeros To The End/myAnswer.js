var moveZeros = function (arr) {
  var newArr=arr.slice(0,arr.length)
    , count = 0;
  for(var i =0; i < arr.length; i++){
    if(arr[i] === 0){
      newArr.splice(i-count,1);
      newArr.push(0);
      count++;
    }
  }
  return newArr;
}