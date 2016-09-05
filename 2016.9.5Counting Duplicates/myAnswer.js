function duplicateCount(text){
  var textLowercase = text.toLowerCase().split('')
     , count = 0
     , flag= 0;
  for (var i = 0; i < textLowercase.length; i++){
    flag=0;
    for(var j = i+1; j < textLowercase.length;j++){
      if(textLowercase[i] === textLowercase[j] && textLowercase[i]!=''){
        textLowercase[j] = '';
        flag=1;
        console.log(textLowercase[j]);
      }
    }
    if(flag){
      count++;
    }
  }
  return count;
}