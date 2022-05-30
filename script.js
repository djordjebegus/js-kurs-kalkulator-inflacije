function inflationCalculator(){
   let inflationRate = document.querySelector('#inflationRate').value ;
   inflationRate = parseFloat(inflationRate);

  
  let money = document.querySelector('#money').value ;
   money = parseFloat(money);

 let  years = document.querySelector('#years').value ;
   years = parseFloat(years);   

let worth = money + (money * (inflationRate / 100));
for(let i = 1; i < years; i++ ) {
    worth += worth * (inflationRate / 100);
}
worth = worth.toFixed(2);
let newElement = document.createElement('div');
newElement.className = 'new-value';
newElement.innerText = `hhhhhhh  ${worth}` ;
document.querySelector('.container').appendChild(newElement);
}
