export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrewid")) {
    return ("My andrew ID is cmaas.");
  } else if (query.toLowerCase().includes("name")) {
    return ("Connor Maas");
  } else if (query.toLowerCase().includes("largest")) {
    const matches = query.match(/\d+/g);
    if (matches) {
        const numbers = matches.map(Number);
        if (numbers && numbers.length) {
            const largest = Math.max(...numbers);
            return (`${largest}`);
        }
    }
  } else if (query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    if (matches) {
        const numbers = matches.map(Number);
        if (numbers && numbers.length) {
            const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return (`${sum}`);
        }
    }
  } else if (query.toLowerCase().includes("multiplied")) {
    const matches = query.match(/\d+/g);
    if (matches) {
        const numbers = matches.map(Number);
        if (numbers && numbers.length) {
            const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
            return (`${sum}`);
        }
    }
  } else if (query.toLowerCase().includes("minus")) {
    const matches = query.match(/\d+/g);
    if (matches && matches.length === 2) {
        const numbers = matches.map(Number);
        const difference = numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
        return (`${difference}`);
    }
  } else if (query.toLowerCase().includes("both a square and")) {
    const isSquareAndCube = (n : number) => {
      const sqrtValue = Math.sqrt(n);
      const cbrtValue = Math.cbrt(n);
      return Number.isInteger(sqrtValue) && Number.isInteger(cbrtValue);
    }
    const matches = query.match(/\d+/g);
    if (matches) {
        const numbers = matches.map(Number);
        const resultNumbers = numbers.filter(isSquareAndCube);
        return (`${resultNumbers[0]}`);
    }
  }
  return "";
}
