// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
// printString("pizza");
// printString("chocolate");


function reverseString(myString){
	// console.log(myString[0]);

	if (myString == ""){
		return "";
	} else{
		return reverseString(myString.substring(1)) + myString.charAt(0);
	}
}

// console.log(reverseString("pizza"))
// console.log(reverseString("chocolate"))

function isPalindrome(string){
	if (string.length == 1 || string.length == 0){
	return true
    } 
	if (string[0] == string[string.length - 1]){
		return isPalindrome(string.slice(1, string.length - 1))
    } 
	return false
}
function addUpTo(num, i){
	
	if (i == 0 ) {
		return num[i]
	} else {
		return num[i] + addUpTo(num, i - 1);
	}
}
addUpTo([1,4,5,5],2)

function maxOf(nums) {
    // copy the given array 
   //nums = numArray.slice();
    // base case: if we're at the last number, return it
    if (nums.length == 1) { return nums[0]; }
    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }
    // with one less number in the array, call the same function
    return maxOf(nums);
}

function includesNumber(array,num){
	if (array[0] == num) {
		return true
	} 
	if (array.length == 0 ){
		return false
    }else if (array[0] !== num) {
		array.splice(0,1)
		return includesNumber(array,num)
	}

}
