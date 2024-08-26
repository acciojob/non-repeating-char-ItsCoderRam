function firstNonRepeatedChar(str) {
 // Write your code here
	 let frequency = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        frequency[char] ? frequency[char]++ : frequency[char] = 1;
    }
    for(let i = 0; i < str.length; i++) {
        if(frequency[str[i]] === 1) {
            return str[i];
        }
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
