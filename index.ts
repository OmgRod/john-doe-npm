import { Name, NameType } from './src/names.js';

const firstName = Name.generateRandom(NameType.Male, 0);
console.log('Random Male First Name:', firstName);

const lastName = Name.generateRandom(NameType.Unisex, 1);
console.log('Random Last Name:', lastName);

const fullName = Name.generateRandom(NameType.Female, 2);
console.log('Random Female Full Name:', fullName);
