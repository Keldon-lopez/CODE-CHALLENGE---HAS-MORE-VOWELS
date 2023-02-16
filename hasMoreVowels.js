const hasMoreVowels = (word) =>{
    let vowelCount = 0;
    let notVowel = 0;
    for (let index = 0; index < word.length; index++) {
        if (word.charAt(index) === "a" || word.charAt(index) === "e" || word.charAt(index) === "i" || word.charAt(index) === "o" || word.charAt(index) === "u" || word.charAt(index) === "A" || word.charAt(index) === "E" || word.charAt(index) === "I" || word.charAt(index) === "O" || word.charAt(index) === "U") {
            vowelCount ++
        } else {
            notVowel ++
        } 
    }
    if (vowelCount > notVowel) {
        return true ;
    } else {
        return false;
    }
}
console.log(hasMoreVowels("moon"))