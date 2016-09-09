function LCS( xstr, ystr ) {
  if( xstr == '' || ystr == '' ) return '';
    
  var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
      yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );
      
  if( xp == yp )
    return xp + LCS( xrest, yrest );
  
  var lcs1 = LCS( xstr, yrest ),
      lcs2 = LCS( xrest, ystr );
      
  return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}