'use strict' ;

const strawberry = document.getElementById('berry');
console.log(strawberry);
console.log("I found the fruit: " + strawberry.innerHTML);
strawberry.style.backgroundColor = 'red';

const orange = document.querySelector("li[data-foodtype='squishy']");
console.log(orange);
console.log("I found the fruit: " + orange.innerHTML);
orange.style.backgroundColor = 'orange';

const fruits = document.getElementsByTagName('li');
console.log(fruits);

console.log("Using the for loop here: ");
for(let i = 0; i < fruits.length; i++) {
  if(fruits[i].innerHTML === 'Pear') {
    fruits[i].style.backgroundColor = 'green';
  }
  fruits[i].style.width = '100px';
  fruits[i].style.listStyleType = 'none';
  console.log(fruits[i].innerHTML);
}

const nodeList = document.querySelectorAll('li');
console.log(nodeList);


console.log("Using forEach here: ");
nodeList.forEach((fruit) => {
  console.log(fruit.innerHTML);
  fruit.style.border = '1px solid black';
});
