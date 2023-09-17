// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(string){
cats.push(string)}
function destructivelyPrependCat(string){
cats.unshift(string)}
function destructivelyRemoveLastCat(string){
cats.pop(string)}
function destructivelyRemoveFirstCat(string){
cats.shift(string)}
function appendCat(string){
const copyOfCats = [...cats, string]
return copyOfCats
} 
function prependCat(string){
const copyOfCats = [string, ...cats]
return copyOfCats
}
function removeLastCat(string){
const removeLastCat = cats.slice(0, cats.length - 1)
return removeLastCat}
function removeFirstCat(string){
const removeFirstCat = cats.slice(1)
return removeFirstCat
}
