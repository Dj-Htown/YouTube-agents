"use strict";
// Ahoy, matey! This be the main deck where we chart prime numbers from 1 to 100.
/**
 * Arrr! This function checks if a number be prime.
 * A prime has no divisors other than 1 and itself, savvy?
 */
function isPrime(value) {
    // Avast! Numbers less than 2 be no primes in these waters.
    if (value < 2) {
        return false;
    }
    // Shiver me timbers! 2 be the smallest prime and a special one.
    if (value === 2) {
        return true;
    }
    // Ye be warned, matey: even numbers (other than 2) be non-prime.
    if (value % 2 === 0) {
        return false;
    }
    // Here be dragons: only test odd divisors up to the square root.
    const limit = Math.floor(Math.sqrt(value));
    for (let divisor = 3; divisor <= limit; divisor += 2) {
        // Arrr! If evenly divisible, this number sinks as non-prime.
        if (value % divisor === 0) {
            return false;
        }
    }
    // Hoist the colors! No divisors found, so this number be prime.
    return true;
}
// Ahoy! Gather all prime numbers between 1 and 100 into this treasure chest.
const primes = [];
for (let candidate = 1; candidate <= 100; candidate += 1) {
    // Avast! Only stash true primes in the chest.
    if (isPrime(candidate)) {
        primes.push(candidate);
    }
}
// Arrr! Fire the cannons and print the prime bounty to the console.
console.log(primes.join("\n"));
//# sourceMappingURL=index.js.map