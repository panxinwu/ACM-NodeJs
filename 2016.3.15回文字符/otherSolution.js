// other solution
longestPalindrome=function(s){
  var l = 0;
  for (var i = 0; i<s.length; i++)
    for(var j = i; j<=s.length; j++)
      if(s.substring(i,j) === s.substring(i,j).split('').reverse().join('') && s.substring(i,j).length > l)
        l = s.substring(i,j).length;

  return l;
}