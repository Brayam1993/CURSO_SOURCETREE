var isPalindrome = function(head) {
    let boolean = true;
    let reverseArray= [];

    for(i=0 ; i < head.length ; i ++){
        reverseArray[i] = head[(head.length-i)-1];             
        if ( !((reverseArray[i]) === (head[i])) ){
            boolean = false;
     };
   };
      
    return boolean;
    
  };
  
  console.log(isPalindrome([3,1,5,1]));