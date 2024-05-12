function reverse(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return (joinArray = reverseArray.join(""));
}

function countStr(str) {
  return str.length;
}

function CapitalizeWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function FindMaximumandMinimum(vec) {
  var max = 0;
  var min = 0;
  var i = 0;

  min = vec[0];
  max = vec[0];

  for (i = 1; i < vec.length; i++) {
    if (vec[i] > max) {
      max = vec[i];
    }
    if (vec[i] < min) {
      min = vec[i];
    }
  }
  return "minimum= " + min + "  and maximum= " + max;
}

function SumofArray(vec) {
  var sum = 0;
  var i = 0;

  for (i = 0; i < vec.length; i++) {
    sum = sum + vec[i];
  }
  return sum;
}

function Factorial(num) {
  var fac = 1;
  var i = 1;

  for (i = 1; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}

function isPrime(num) {
  let isprime = num == 1 ? false : true;

  for (let i = 2; i < num; i++) {
    num % i == 0 ? (isprime *= false) : (isprime *= true);
  }

  return `${num} is ${isprime ? "prime" : "not prime"} number`;
}

function Fibonacci(num) {
  var vec = [0, 1];
  for (let i = 2; i <= num; i++) {
    vec[i] = vec[i - 2] + vec[i - 1];
  }

  return vec[num];
}

console.log(reverse("123456789"));
console.log(countStr("123456789"));
console.log(FindMaximumandMinimum([1, 2, 3, 4, 9, 6, 8, 4, 1, 2, 3, 6, 10]));
console.log(SumofArray([1, 2, 3, 4, 9, 6, 8, 4, 1, 2, 3, 6, 5]));
console.log(Factorial(6));
console.log(isPrime(6));
console.log(Fibonacci(10));
