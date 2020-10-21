/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//solution1
function XO(str) {
    //code here
    var x = 0;
    var o = 0;
    var lStr = str.toLowerCase();
    
    for(var i=0; i<lStr.length; i++){
      
      if(lStr[i] == 'x'){x++};
      if(lStr[i] == 'o'){o++};
        
      }
    return x==o;
}

//solution2
function XO(str) {
    //code here
    var x = 0
    var o = 0
    var lstr= str.toLowerCase();
    
  for(var i=0; i<lstr.length; i++){
    if (lstr[i] == 'x'){
      x++};
    if (lstr[i] == 'o'){
      o++};
      }
  if(x == o){ return true}
  if(x !== o){return false}
    
}
