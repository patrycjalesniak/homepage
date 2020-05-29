const firstName = "Patrycja";
const age = "26";

console.log(`Witaj Drogi Odwiedzający, nazywam się ${firstName}`);

const heading = document.querySelector(".hotpink-header--js");

console.log(heading.innerHTML);

heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName}`;

const greet=(age,firstName) =>{
    console.log(
        `Hej! Miło, że tutaj zaglądasz, nazywam się ${firstName} i mam ${age} lata.`
    );
}

greet(26,'Pati');

const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = `Dobre pytanie!`;

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return `wynik ${myNumber}`;
}

const myResult = calculate(age);
console.log(age);
console.log(myResult);

let myNumber = "3";
const timesFive = (myNumber) => {
  console.log(`Podana liczba to ${myNumber}`);
  return myNumber * 5;
};
let timesFiveResult = timesFive(myNumber);
console.log(
  `Wynik mnożenia liczby ${myNumber} razy 5 wynosi ${timesFiveResult}`
);

myNumber = "5";
timesFiveResult = timesFive(myNumber);
console.log(
  `Wynik mnożenia liczby ${myNumber} razy 5 wynosi ${timesFiveResult}`
);



const weekNumber = "5";

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
    <!--teks do nagłówka dodany za pomocą JS-->

createContent(
  ".secondary-heading__welcome--js",
  `HEJ! JESTEM PATRYCJA I... `
);

console.log("Więcej funkcji liczących coś prostego:");

const timesFour = (someNumber) => {
  inputNumber = someNumber;
  console.log(`podana liczba to ${inputNumber}`);
  timesFourResult = someNumber * 4;
  console.log(
    `wynik mnożenia liczby ${inputNumber} razy 4 to: ${timesFourResult}`
  );
};

timesFour(5);

function calculateMultiplication(firstInputNumber, secondInputNumber) {
  console.log(`podane liczby to ${firstInputNumber} i ${secondInputNumber}`);
  multiplicationResult = firstInputNumber * secondInputNumber;
  console.log(`wynik mnożenia to ${multiplicationResult}`);
}

calculateMultiplication(6, 8);
calculateMultiplication(2, 2);
calculateMultiplication(12, 3);


if ('Java' != 'Javascript') {
  console.log('Java to Javascript');
}

const button = document.querySelector('.action--js');

console.log(button)


button.addEventListener('click', () => {
  const heading = document.querySelector(".hotpink-header--js");
  heading.innerHTML = `Hej! Miło Cię gościć na mojej stronie!`;
  console.log(heading.classList.contains ('hotpink-header--js'));

});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle('navigation--open');



})