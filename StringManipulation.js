
//Practice exercise 8.4
/* let sentenceWord = "estE munDO eS marAvILLoSO, paISAjeS, maR y tiERrA"

function getSentence({sentence}){
  wordLowerCase=sentence.toLowerCase()
  let array = []
  arraySplit = wordLowerCase.split(" ")
  arraySplit.forEach((element,index)=> { 
    upperCaseFirstLetter = element.charAt(0).toUpperCase().concat(element.slice(1))
    array.push(upperCaseFirstLetter)  
  });
  return array.join(" ")
}

console.log(getSentence({sentence:sentenceWord}))
*/

//Practice exercise 8.5

let stringWords = "I love JavaScript"
let arrayVowels = ['a','e','i','o','u']
stringWordLowerCase = stringWords.toLowerCase()

String.prototype.replaceAll = function (target, payload) {
    let regex = new RegExp(target, 'g')
    return this.valueOf().replace(regex, payload)
};

arrayVowels.forEach((element, index) => {
   stringWordLowerCase = stringWordLowerCase.replaceAll(element,index);
});

console.log(stringWordLowerCase)






