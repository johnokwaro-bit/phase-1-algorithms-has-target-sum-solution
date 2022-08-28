function hasTargetSum(array, target) {
  // Write your algorithm here

  //look through each number in the array
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    // look through the rest of the numbers
    for (let j = i+1; j < array.length; j++) {
      // check if the complement is in the rest of the numbers
      if (array[j] === complement) return true;
              
    }
    
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  Runtime complexity O(n^2)
*/

/* 
  Add your pseudocode here

  iterate throught each number in the array
  for the current number, identify its complement that adds it upto the target
  iterate through the numbers in the array
  check if any number is equal to the complement
  if so, return true, otherwise return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
