str = "This is a function that can be called to disemvowel a string. All the vowels will be removed. For they displease me."
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel(str));