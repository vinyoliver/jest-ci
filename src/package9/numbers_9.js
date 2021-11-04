const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

const getAllPrimes = (num) => {
  const primeNumbers = [];
  for (let i = 2; i < num; i++) {
    isPrime(i) && primeNumbers.push(i);
  }
  return primeNumbers;
};

module.exports = { isPrime, getAllPrimes };
