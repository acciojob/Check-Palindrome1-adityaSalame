// complete the given function

function palindrome(str){
	let start=0, end=str.length-1;
	let strr=str.toLowerCase();
	while(end>=start){
		if(strr.charAt(start)!=strr.charAt(end)){
			return false;
		}
		end--;
		start++;
	}
	return true;
}
module.exports = palindrome
