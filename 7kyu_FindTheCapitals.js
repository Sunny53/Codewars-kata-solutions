/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/

var capitals = function (word) {
  // Write your code here
  res = []
  for(i=0;i<word.length;i++){
    regex=/[A-Z]/
    if(regex.test(word[i])==true){
      res.push(i)
    }
  }
  return res
  
};
