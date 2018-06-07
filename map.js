var words = ["ground", "control", "to", "major", "tom"];


function map(arr,func) {
var result = []
for (var i = 0; i < arr.length; i++) {
  var singleItem = arr[i];
  var changedItem = func(singleItem)
  result.push(changedItem);
}
console.log(result)
return result;

}


map(words, function(word) {
   return word.length;
 });

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});