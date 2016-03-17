function solution(number){
  var i=1,
      total = 0;
  while(i<number){
    if(i % 3 == 0 || i % 5 ==0){
      total = total + i;
    }
    i++;
  }
  return total;
}