var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}
text1 = 'aBcD'
swapCase(text1)
text2 = 'jAvaScRIPt'
swapCase(text2)
text3 = 'jeDAcAdemY'
swapCase (text3)
