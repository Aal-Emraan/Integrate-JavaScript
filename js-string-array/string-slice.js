const anthem = 'amar sonar bangla ami tomay valobashi';
const words = anthem.split(' ');
console.log(words);
const secondwords = anthem.split('a',3);
console.log(secondwords);

console.log(anthem.slice(0,4));
console.log(anthem.slice(-(anthem.length-2)));

console.log(anthem.substr(11,6));
console. log(anthem.substring(11, 18));

const country = 'bangladesh';
const city = 'sylhet';

const address= city.concat(', ' ,country,'. this is my address.');
console.log(address);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const joined = vowels.join(', ');
console.log(joined);