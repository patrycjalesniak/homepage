const firstName = "Patrycja";

console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName}`);

const heading = document.querySelector('.hotpink-header--js');

console.log(heading.innerHTML);

heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName}`

