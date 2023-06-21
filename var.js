// In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!

// var x = something;
// x === x // returns false!
// Write a function which will return value for which strict comparison will give false!

// Solution

function findStrangeValue() {
    return 0 / 0;
   }
   
   var x =  findStrangeValue();
   
     console.log(x===x);
   
// add a comment