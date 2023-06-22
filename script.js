// complete the given function

function palindrome(str){
	let start=0, end=str.length-1;
	while(end>=start){
		if(str.charAt(start)!=str.charAt(end)){
			return false;
		}
		end--;
		start++;
	}
	return true;
}
module.exports = palindrome
