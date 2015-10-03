HELPER

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).



  //Code Here
function divider(nums, evens, odds) {
  for(var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    };
  }
  var finalArray = [];
  finalArray.push(evens[]);
  finalArray.push(odds[]);
  return finalArray;
}

var finalArray = divider(nums, evens, odds);
alert(finalArray);