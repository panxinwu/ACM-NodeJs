function alphabetPosition(text) {
    var temp = text,
        reg= /^[A-Za-z]+$/,
        num = '',
        arr = temp.split('');
  for(var i = 0; i < arr.length;i++){
    if (reg.test(arr[i])){
        num = num + (arr[i].toLocaleLowerCase().charCodeAt() - 96) + ' ';
    }
  }
  num = num.substr(0,num.length-1)
  return num;
}