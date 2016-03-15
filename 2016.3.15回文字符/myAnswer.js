/* Description:

Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/
longestPalindrome=function(s){
  //your code here
  var i,j,temp,m,n=0;
  var big = 1;
  if(s.length == 0){
    return 0;
  }else{
    for(i=0;i<s.length;i++){
      for(j=i+1;j<s.length;j++){
        if(s[i] == s[j] && (j-i)>1){
          for(m=0;m<((j+1)-i)/2-1;m++){
            if(s[i+m+1] != s[j-m-1]){
              break;
            }else if((i+m+1) == (j-m-2) || (i+m+1) == (j-m-3)){
              temp = j-i+1;
              if(big < temp){big = temp}
            }
          }
        }else if(s[i] == s[j] && big < 2){
          big = 2;
        }
      }
      
    }
    return big;
  }
}