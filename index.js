// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
const newArray = [...cats, name];
return newArray;
}

function prependCat(name){
    const newArray2 = [name ,...cats];
    return newArray2;
}

function removeLastCat(){
    const newArray3 = cats.slice(0,-1);
    return newArray3;

}

function  removeFirstCat(){
    const newArray4 = cats.slice(1);
    return newArray4;
}