function findLongestWordLength(str) {
    let longest = 0;
    var words = str.split(' ');
    
    for (var i = 0; i < words.length; i++){
      if (words[i].length > longest){
        longest = words[i].length;
      }
    }
    return longest;
  }
  