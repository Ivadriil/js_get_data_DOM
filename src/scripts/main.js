'use strict';

const populaition = document.getElementsByClassName('population');

console.log(populaition);

function populationNumber() {
    let allPeople = 0;
    for (let i = 0; i < populaition.length; i++) {
        allPeople += parseInt((populaition[i].textContent).split(',').join(''));
    }
    return allPeople;
};

console.log(populationNumber(populaition)); 

const totalPopulation = document.getElementsByClassName('total-population');

totalPopulation[0].textContent = populationNumber(populaition).toLocaleString(); 

const averagePopulation = document.getElementsByClassName('average-population');

averagePopulation[0].textContent = Math.round(populationNumber(populaition) / populaition.length).toLocaleString();

